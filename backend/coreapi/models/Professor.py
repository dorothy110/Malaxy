from django.db import models

class Professor(models.Model):
    ProfessorId = models.AutoField(primary_key=True, editable=False) 
    ProfessorName = models.CharField(max_length=128)
