from django.db import models

from .Section import *
from .User import *

class Comment(models.Model):
    CommentId = models.AutoField(primary_key=True, editable=False)
    ParentId = models.IntegerField()
    CommentContent = models.TextField()
    Section = models.ForeignKey(Section, on_delete=models.CASCADE)
    User = models.ForeignKey(User, on_delete=models.CASCADE)
    TimeStamp = models.DateTimeField(auto_now_add=True)