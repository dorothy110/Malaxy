from coreapi.models import Professor
from coreapi.serializers import ProfessorSerializer
from rest_framework import generics

class ProfessorView(generics.ListCreateAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer
