from coreapi.models import Section
from coreapi.serializers import SectionSerializer
from rest_framework import generics

class SectionView(generics.ListCreateAPIView):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer
