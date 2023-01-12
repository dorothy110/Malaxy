from coreapi.models import CourseLevel
from coreapi.serializers import CourseLevelSerializer
from rest_framework import generics

class CourseLevelView(generics.ListCreateAPIView):
    queryset = CourseLevel.objects.all()
    serializer_class = CourseLevelSerializer
