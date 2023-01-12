from rest_framework import serializers
from coreapi.models import BreadthBridge

class BreadthBridgeSerializer(serializers.ModelSerializer):

    class Meta:
        model = BreadthBridge
        fields = '__all__'
