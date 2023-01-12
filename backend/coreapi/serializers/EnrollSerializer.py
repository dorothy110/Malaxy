from rest_framework import serializers
from coreapi.models import Enroll

class EnrollSerializer(serializers.ModelSerializer):

    class Meta:
        model = Enroll
        fields = '__all__'
