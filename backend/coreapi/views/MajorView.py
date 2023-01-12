from coreapi.models import Major
from coreapi.serializers import MajorSerializer
from rest_framework import generics

class MajorView(generics.ListAPIView):
    queryset = Major.objects.all()
    serializer_class = MajorSerializer
