from rest_framework import serializers
from coreapi.models import ExampleMessage

class ExampleMessageSerializer(serializers.Serializer):
    message = serializers.CharField(required=False, allow_blank=False, max_length=256)

    class Meta:
        model = ExampleMessage
        fields = ('message')