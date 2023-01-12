from django.db import models

from .Course import *
from .GenEd import *

class GenEdBridge(models.Model):
    GBId = models.AutoField(primary_key=True, editable=False)
    GenEd = models.ForeignKey(GenEd, on_delete=models.CASCADE)
    Course = models.ForeignKey(Course, on_delete=models.CASCADE)