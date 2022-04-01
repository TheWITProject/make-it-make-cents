from django.conf import settings
from django.db import models
from django.utils import timezone

class User(models.Model):
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    email = models.TextField()
    birthday = models.DateTimeField(blank=True, null=True)

