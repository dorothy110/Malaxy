from coreapi.models import Breadth
from coreapi.serializers import BreadthSerializer
from rest_framework import generics

class BreadthView(generics.ListAPIView):
    queryset = Breadth.objects.all()
    serializer_class = BreadthSerializer
