from coreapi.models import Enroll
from coreapi.serializers import EnrollSerializer
from rest_framework import generics

class EnrollView(generics.ListCreateAPIView):
    queryset = Enroll.objects.all()
    serializer_class = EnrollSerializer
