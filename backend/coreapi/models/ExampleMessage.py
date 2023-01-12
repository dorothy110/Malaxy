from typing_extensions import Required
from django.db import models

class ExampleMessage(models.Model):
    message = models.CharField(max_length=256)
    
    class Meta:
        ordering = ['message']