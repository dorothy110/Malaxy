from coreapi.models import BreadthBridge
from coreapi.serializers import BreadthBridgeSerializer
from rest_framework import generics

class BreadthBridgeView(generics.ListCreateAPIView):
    queryset = BreadthBridge.objects.all()
    serializer_class = BreadthBridgeSerializer
