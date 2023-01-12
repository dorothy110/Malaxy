from rest_framework import serializers
from coreapi.models import Major

class MajorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Major
        fields = '__all__'
