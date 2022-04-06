from django.db import models


class Users(models.Model):
    username = models.CharField(blank=False, null=False, max_length=30)
    password = models.CharField(blank=False, null=False, max_length=30)
    email = models.EmailField(blank=False, null=False)
    birthday = models.DateField(blank=False, null=False)

