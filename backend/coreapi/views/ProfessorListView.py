from http.client import BAD_REQUEST
import re
from rest_framework.views import APIView
from rest_framework.response import Response
from coreapi.models import Course, Section, Comment, Professor
from coreapi.serializers import ProfessorSerializer
from rest_framework import status
from django.db.models import Count, F

class ProfessorListView(APIView):
    def get(self, request, format=None):
        courseId = int(request.GET.get("courseId"))

        query = '''
            SELECT 
                ProfessorId, ProfessorName
            FROM coreapi_Professor
            INNER JOIN coreapi_Section ON coreapi_Section.Professor_id = coreapi_Professor.ProfessorId
            WHERE coreapi_Section.Course_id = {0}
        '''.format(courseId)
        professors = Professor.objects.raw(query) 

        serializer = ProfessorSerializer(professors, many=True)
        return Response(serializer.data)
        
