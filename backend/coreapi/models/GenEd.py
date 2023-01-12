from django.db import models

class GenEd(models.Model):
    GenEdId = models.AutoField(primary_key=True, editable=False)
    GenEdName = models.CharField(max_length=64)
