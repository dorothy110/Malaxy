from rest_framework import serializers
from coreapi.models import Grades

class GradesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Grades
        fields = '__all__'
