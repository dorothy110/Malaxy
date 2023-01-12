from coreapi.models import GenEdBridge
from coreapi.serializers import GenEdBridgeSerializer
from rest_framework import generics

class GenEdBridgeView(generics.ListCreateAPIView):
    queryset = GenEdBridge.objects.all()
    serializer_class = GenEdBridgeSerializer
