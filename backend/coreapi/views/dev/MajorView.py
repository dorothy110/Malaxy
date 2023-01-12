from coreapi.models import Major
from coreapi.serializers import MajorSerializer
from rest_framework import generics

class MajorView(generics.ListCreateAPIView):
    queryset = Major.objects.all()
    serializer_class = MajorSerializer
