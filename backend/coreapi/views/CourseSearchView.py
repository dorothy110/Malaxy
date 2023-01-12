from rest_framework.views import APIView
from rest_framework.response import Response
from coreapi.serializers import CourseSearchSerializer
from coreapi.models import Course, Enroll, GenEdBridge, BreadthBridge, CourseLevel, Grades
from rest_framework import status, pagination
from django.db.models import F, Sum
import re

## Regexs
REGEX_NUMBERS_COMMAS = "^[, 0-9]*$"
REGEX_CHARACTERS_COMMAS = "^[, A-Z a-z]*$"
REGEX_ALPHANUMERIC = "^[a-z A-Z 0-9]*$"

## Error messages
RESPONSE_ERROR_NUMBERS_COMMAS_ONLY = "No characters other than numbers and commas allowed"
RESPONSE_CHARACTERS_COMMAS_ONLY = "No characters other than characters and commas allowed"
RESPONSE_ALPHANUMERIC_ONLY = "No special characters allowed"

def rawQueryStringToIntList(s, delimiter=','):
    """Retrieve the list of integers from its representation as a string.
    E.g., "1,   2,3   ,4,,,,,5,," --> [1, 2, 3, 4, 5].

    Parameters:
    s (str): The string representation that we want to extract from
    delimiter (str): The delimiter that separate items

    Returns:
    list: The list if integers
    """
    return list(map(lambda x: int(x.strip()), s.replace(delimiter + delimiter, delimiter).split(delimiter)))

def rawQueryStringToStringList(s, delimiter=','):
    """Retrieve the list of strings from its representation as a string.

    Parameters:
    s (str): The string representation that we want to extract from
    delimiter (str): The delimiter that separate items

    Returns:
    list: The list if strings
    """
    return list(map(lambda x: x.strip(), s.replace(delimiter + delimiter, delimiter).split(delimiter)))

def haveFilter(queryParamValue):
    """Check a query parameter value if this is an effective filtering condition for the database retrieval.

    Parameters:
    queryParamValue (str): The value of the query parameter

    Returns:
    bool: True if it is an effective filtering condition, False otherwise
    """
    return queryParamValue is not None and queryParamValue != '' and queryParamValue != 'all'

def pythonListToSqlListString(pyList):
    
    """
    Returns:
    str: The string representation of the list that is usable in SQL queries (e.g., (1, 2, 3) )
    """
    return '(' + str(pyList)[1:-1] + ')'

class CourseSearchView(APIView):
    """
    The view representing the course search and filtering endpoint(s).
    See API documentation spreadsheet for usage and format info.
    To devs: any changes in API interfaces (query params, returning formats) should be reflected in the documentation spreadsheet.
    """

    pagination_class = pagination.LimitOffsetPagination
    
    def get(self, request, format=None):
        """GET: given filter options and search query, return the list of hit courses, sorted by and attached with the GPA from all sections.
        """

        ## Retrieve and validate query parameters
        majorsRaw = request.GET.get("majors")               # Majors: expecting list of ids
        if haveFilter(majorsRaw) and not re.match(REGEX_NUMBERS_COMMAS, majorsRaw):
            return Response(RESPONSE_ERROR_NUMBERS_COMMAS_ONLY, status=status.HTTP_400_BAD_REQUEST)

        genEdsRaw = request.GET.get("genEds")               # GenEds: expecting list of ids
        if haveFilter(genEdsRaw) and not re.match(REGEX_NUMBERS_COMMAS, genEdsRaw):
            return Response(RESPONSE_ERROR_NUMBERS_COMMAS_ONLY, status=status.HTTP_400_BAD_REQUEST)

        breadthsRaw = request.GET.get("breadths")           # Breadths: expecting list of ids
        if haveFilter(genEdsRaw) and not re.match(REGEX_NUMBERS_COMMAS, breadthsRaw):
            return Response(RESPONSE_ERROR_NUMBERS_COMMAS_ONLY, status=status.HTTP_400_BAD_REQUEST)

        levelsRaw = request.GET.get("levels")               # Levels: expecting list of strings
        if haveFilter(genEdsRaw) and not re.match(REGEX_CHARACTERS_COMMAS, levelsRaw):
            return Response(RESPONSE_CHARACTERS_COMMAS_ONLY, status=status.HTTP_400_BAD_REQUEST)

        searchQuery = request.GET.get("searchQuery")        # Search Query: expecting search keyword as a string
        if haveFilter(genEdsRaw) and not re.match(REGEX_ALPHANUMERIC, searchQuery):
            return Response(RESPONSE_ALPHANUMERIC_ONLY, status=status.HTTP_400_BAD_REQUEST)

        ## SQL query building blocks
        # part 1: SELECT and JOIN statements
        # part 2: WHERE statements
        # part 3: GROUP BY and ORDER BY statements, not changing a lot
        # Note: Django database system uses {model}_id as a foreign key field while we usually use {model}Id as a primary key
        # Note: We are not using ORM here since it requires more time to research on how to use
        #       and there is no strategic issue with that currently
        sqlRawQueryPart1 = '''
            SELECT 
                CourseId, CourseName, CourseCategoryId, CourseTitle, CourseDescription, CourseCredits, CourseReferenceId,
                SUM(1.0 * Gpa * GradeCountTotal)/SUM(GradeCountTotal) AS Gpa
            FROM coreapi_Course
            INNER JOIN
            (
                SELECT 
                    coreapi_Section.SectionId AS SectionId,
                    coreapi_Section.Course_id AS Merged_Course_id,
                    SUM(1.0 * Gpa * GradeCountTotal)/SUM(GradeCountTotal) AS Gpa,
                    SUM(GradeCountTotal) AS GradeCountTotal
                FROM coreapi_Grades
                INNER JOIN coreapi_Section ON coreapi_Grades.Section_id = coreapi_Section.SectionId
                GROUP BY coreapi_Section.SectionId
            ) ON CourseId = Merged_Course_id
        '''
        sqlRawQueryPart2 = " WHERE TRUE "
        sqlRawQueryPart3 = '''

            GROUP BY coreapi_Course.CourseId
            ORDER BY Gpa DESC
        '''
        
        ## Apply filters
        # Enroll table stores the mapping to courses
        if haveFilter(majorsRaw):
            majors = rawQueryStringToIntList(majorsRaw)
            sqlRawQueryPart1 += " INNER JOIN coreapi_Enroll ON coreapi_Enroll.Course_id = CourseId "
            sqlRawQueryPart2 += " AND Major_id IN " + pythonListToSqlListString(majors) + ' '
        
        # GenEdBridge table stores the mapping to courses
        if haveFilter(genEdsRaw):
            genEds = rawQueryStringToIntList(genEdsRaw)
            sqlRawQueryPart1 += " INNER JOIN coreapi_GenEdBridge ON coreapi_GenEdBridge.Course_id = CourseId "
            sqlRawQueryPart2 += " AND GenEd_id IN " + pythonListToSqlListString(genEds) + ' '
        
        # BreadthBridge table stores the mapping to courses
        if haveFilter(breadthsRaw):
            breadths = rawQueryStringToIntList(breadthsRaw)
            sqlRawQueryPart1 += " INNER JOIN coreapi_BreadthBridge ON coreapi_BreadthBridge.Course_id = CourseId "
            sqlRawQueryPart2 += " AND Breadth_id IN " + pythonListToSqlListString(breadths) + ' '

        # CourseLevel table stores the mapping to courses
        if haveFilter(levelsRaw):
            levels = rawQueryStringToStringList(levelsRaw)
            sqlRawQueryPart1 += " INNER JOIN coreapi_CourseLevel ON coreapi_CourseLevel.Course_id = CourseId "
            sqlRawQueryPart2 += " AND CourseLevel IN " + pythonListToSqlListString(levels) + ' '

        # The current implementation just check if this keyword is a part of course name (e.g., COMP SCI 300) and course title (e.g., "Introduction to ...") or not
        # SUGGEST: smarter searching by using tags for each course (e.g., COMP SCI --> CS) or splitting search query by spaces
        if haveFilter(searchQuery):
            sqlRawQueryPart2 += " AND (CourseName LIKE " + "'%" + searchQuery + "%' OR CourseTitle LIKE " + "'%" + searchQuery + "%')"
        
        ## Call SQL query to retrieve data
        sqlRawQuery = sqlRawQueryPart1 + sqlRawQueryPart2 + sqlRawQueryPart3
        courses = Course.objects.raw(sqlRawQuery)

        ## Format data and send the response to the request
        # Using Django paginator here
        paginator = self.pagination_class()
        page = paginator.paginate_queryset(courses, request)
        courseSearchSerializer = CourseSearchSerializer(page, many=True)
        return paginator.get_paginated_response(courseSearchSerializer.data)

