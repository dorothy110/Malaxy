from rest_framework import serializers
from coreapi.models import CourseLevel

class CourseLevelSerializer(serializers.ModelSerializer):

    class Meta:
        model = CourseLevel
        fields = '__all__'
