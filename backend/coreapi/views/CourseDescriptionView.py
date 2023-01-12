from http.client import BAD_REQUEST
import re
from rest_framework.views import APIView
from rest_framework.response import Response
from coreapi.models import Course, Section, Comment
from coreapi.serializers import CourseSerializer
from rest_framework import status
from django.db.models import Count, F

class CourseDescriptionView(APIView):
    def get(self, request, format=None):
        courseId = int(request.GET.get("courseId"))
        course = Course.objects.get(pk=courseId)
        serializer = CourseSerializer(course)
        return Response(serializer.data)
        
