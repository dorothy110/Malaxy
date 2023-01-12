from django.db import models

class User(models.Model):
    UserId = models.AutoField(primary_key=True, editable=False)        
    UserEmail = models.CharField(max_length=256)
    UserPassword = models.CharField(max_length=256)     # Change this later to keep safe (not store as plaintext)
