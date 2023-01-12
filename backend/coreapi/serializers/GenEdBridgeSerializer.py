from rest_framework import serializers
from coreapi.models import GenEdBridge

class GenEdBridgeSerializer(serializers.ModelSerializer):

    class Meta:
        model = GenEdBridge
        fields = '__all__'
