from rest_framework.views import APIView
from rest_framework.response import Response
from coreapi.models import ExampleMessage
from coreapi.serializers import ExampleMessageSerializer
from rest_framework import status

class ExampleMessageView(APIView):
    def get(self, request, format=None):
        exampleMessages = ExampleMessage.objects.all()
        serializer = ExampleMessageSerializer(exampleMessages, many=True)
        
        return Response(serializer.data)

    def post(self, request, format=None):
        # Deserialize data
        serializer = ExampleMessageSerializer(data=request.data)
        if (not serializer.is_valid()):
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        # Create a new object
        exampleMessage = ExampleMessage(message=serializer.data.get('message'))
        exampleMessage.save()

        # Respond with the created object
        return Response(ExampleMessageSerializer(exampleMessage).data, status=status.HTTP_201_CREATED)
