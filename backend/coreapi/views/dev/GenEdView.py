from coreapi.models import GenEd
from coreapi.serializers import GenEdSerializer
from rest_framework import generics

class GenEdView(generics.ListCreateAPIView):
    queryset = GenEd.objects.all()
    serializer_class = GenEdSerializer
