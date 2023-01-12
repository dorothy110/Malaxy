from django.db import models

from .Course import *
from .Professor import *

class Section(models.Model):
	SectionId = models.AutoField(primary_key=True, editable=False)
	Course = models.ForeignKey(Course, on_delete=models.CASCADE)
	Professor = models.ForeignKey(Professor, on_delete=models.CASCADE)

