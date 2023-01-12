from coreapi.models import Course
from coreapi.serializers import CourseSerializer
from rest_framework import generics

class CourseView(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
