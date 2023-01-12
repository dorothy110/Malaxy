from rest_framework import serializers
from coreapi.models import Breadth

class BreadthSerializer(serializers.ModelSerializer):

    class Meta:
        model = Breadth
        fields = '__all__'
