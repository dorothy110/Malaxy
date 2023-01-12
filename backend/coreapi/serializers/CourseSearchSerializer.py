from rest_framework import serializers
from coreapi.models import Course

class CourseSearchSerializer(serializers.Serializer):
    CourseId = serializers.IntegerField()
    CourseName = serializers.CharField()
    CourseCategoryId = serializers.IntegerField()
    CourseTitle = serializers.CharField()
    CourseDescription = serializers.CharField()
    CourseCredits = serializers.CharField()
    CourseReferenceId = serializers.IntegerField()
    Gpa = serializers.DecimalField(max_digits=3, decimal_places=2)
