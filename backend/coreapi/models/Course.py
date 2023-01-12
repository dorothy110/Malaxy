from django.db import models

class Course(models.Model):
    CourseId = models.AutoField(primary_key=True, editable=False)
    CourseName = models.CharField(max_length=16)
    CourseCategoryId = models.IntegerField()
    CourseTitle = models.CharField(max_length=128)
    CourseDescription = models.TextField()
    CourseCredits = models.CharField(max_length=8)
    CourseReferenceId = models.IntegerField()
