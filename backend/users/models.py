from django.conf import settings
from django.db import models
from django.utils import timezone


class User(models.Model):
    username = models.CharField(null=False, blank=False, max_length=30)
    password = models.CharField(null=False, blank=False, max_length=30)
    email = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.firstname