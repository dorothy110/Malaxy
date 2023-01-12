from django.db import models

from .Course import *
from .Breadth import *

class BreadthBridge(models.Model):
    BBId = models.AutoField(primary_key=True, editable=False)
    Breadth = models.ForeignKey(Breadth, on_delete=models.CASCADE)
    Course = models.ForeignKey(Course, on_delete=models.CASCADE)