from django.db import models

class Breadth(models.Model):
    BreadthId = models.AutoField(primary_key=True, editable=False)
    BreadthName = models.CharField(max_length=64)
