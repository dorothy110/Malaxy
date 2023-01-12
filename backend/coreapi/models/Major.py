from django.db import models

class Major(models.Model):
    MajorId = models.AutoField(primary_key=True, editable=False)
    MajorName = models.CharField(max_length=128)
    MajorShortName = models.CharField(max_length=18)
