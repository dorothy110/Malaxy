from django.db import models
from .Section import *

class Grades(models.Model):
    Section = models.ForeignKey(Section, on_delete=models.CASCADE)
    SemesterCode = models.IntegerField()
    SemesterName = models.CharField(max_length=16)
    Gpa = models.DecimalField(max_digits=3, decimal_places=2)
    GradeCountA = models.IntegerField()
    GradeCountAb = models.IntegerField()
    GradeCountB = models.IntegerField()
    GradeCountBc = models.IntegerField()
    GradeCountC = models.IntegerField()
    GradeCountD = models.IntegerField()
    GradeCountF = models.IntegerField()
    GradeCountSd = models.IntegerField()
    GradeCountUd = models.IntegerField()
    GradeCountOther = models.IntegerField()
    GradeCountTotal = models.IntegerField()
