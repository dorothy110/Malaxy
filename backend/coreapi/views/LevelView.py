from rest_framework.views import APIView
from rest_framework.response import Response
from coreapi.models import CourseLevel
from rest_framework import pagination
import re

class LevelView(APIView):
    pagination_class = pagination.LimitOffsetPagination
    def get(self, request, format=None):
        paginator = self.pagination_class()

        levels = CourseLevel.objects.values_list('CourseLevel', flat=True).distinct()
        if levels.exists():
            page = paginator.paginate_queryset(levels, request)
            return paginator.get_paginated_response(page)

        return Response([])

