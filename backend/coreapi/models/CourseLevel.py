from django.db import models

from .Course import *

class CourseLevel(models.Model):
    Course = models.ForeignKey(Course, on_delete=models.CASCADE)
    CourseLevel = models.CharField(max_length=32)
