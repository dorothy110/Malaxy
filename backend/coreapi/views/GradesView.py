from http.client import BAD_REQUEST
import re
from rest_framework.views import APIView
from rest_framework.response import Response
from coreapi.models import Course, Section, Comment, Grades
from coreapi.serializers import GradesSerializer
from rest_framework import status
from django.db.models import Count, F

class GradesView(APIView):
    def get(self, request, format=None):
        courseId = int(request.GET.get("courseId"))
        professorId = int(request.GET.get("professorId"))

        query = '''
            SELECT 
                *
            FROM coreapi_Grades
            INNER JOIN coreapi_Section ON coreapi_Section.SectionId = coreapi_Grades.Section_id
            WHERE coreapi_Section.Course_id = {0} AND coreapi_Section.Professor_id
        '''.format(courseId, professorId)
        grades = Grades.objects.raw(query)[0]

        serializer = GradesSerializer(grades)
        return Response(serializer.data)
        
