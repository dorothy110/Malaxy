from django.db import models

from .Major import *
from .Course import *

class Enroll(models.Model):
    EnrollmentId = models.AutoField(primary_key=True, editable=False)
    Major = models.ForeignKey(Major, on_delete=models.CASCADE)
    Course = models.ForeignKey(Course, on_delete=models.CASCADE)