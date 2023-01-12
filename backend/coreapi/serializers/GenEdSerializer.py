from rest_framework import serializers
from coreapi.models import GenEd

class GenEdSerializer(serializers.ModelSerializer):

    class Meta:
        model = GenEd
        fields = '__all__'
