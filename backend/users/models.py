from django.conf import settings
from django.db import models 
from django.contrib.auth.models import User 
from django.utils import timezone

#We have to create the database table for a new user

class user(models.Model):
    Username = models.CharField(null=False, blank=False, max_length=30)
    First_name = models.CharField(null=False, blank=False, max_length=30)
    Last_name = models.CharField(null=False, blank=False, max_length=30)
    Email = models.TextField(null=False, blank=False) #I know for email we have to use an email authentication 
    Password = models.CharField(null=False, blank=False, max_length=30)

#class login(users):
#        Username = models.ForeignKey(null=False, blank=False, max_length=30)
#       Password = models.CharField(null=False, blank=False, max_length=30)

class Question(models.Model):
    question_number = models.IntegerField(max_length=11)
    question_text = models.CharField(max_length=5000)

    def __str__(self):
        return self.question_text

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choiceA = models.CharField(max_length=5000) 
    choiceB = models.CharField(max_length=5000)
    choiceC = models.CharField(max_length=5000)

    def __str__(self):
        return str(self.question)

    