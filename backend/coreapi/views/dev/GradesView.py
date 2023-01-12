from coreapi.models import Grades
from coreapi.serializers import GradesSerializer
from rest_framework import generics

class GradesView(generics.ListCreateAPIView):
    queryset = Grades.objects.all()
    serializer_class = GradesSerializer
