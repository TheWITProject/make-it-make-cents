from django.conf import settings
from django.db import models 
from django.contrib.auth.models import users 
from django.utils import timezone

#We have to create the database table for a new user

class users(models.Model):
    Username = models.CharField(null=False, blank=False, max_length=30)
    First_name = models.CharField(null=False, blank=False, max_length=30)
    Last_name = models.CharField(null=False, blank=False, max_length=30)
    Email = models.TextField(null=False, blank=False) #I know for email we have to use an email authentication 
    Password = models.CharField(null=False, blank=False, max_length=30)

#class login(users):
#        Username = models.CharField(null=False, blank=False, max_length=30)
#       Password = models.CharField(null=False, blank=False, max_length=30)
