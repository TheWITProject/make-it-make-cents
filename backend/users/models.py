from django.conf import settings
from django.db import models 
from django.contrib.auth.models import User 
from django.utils import timezone

class user(models.Model):
    Username = models.CharField(null=False, blank=False, max_length=30)
    First_name = models.CharField(null=False, blank=False, max_length=30)
    Last_name = models.CharField(null=False, blank=False, max_length=30)
    Email = models.TextField(null=False, blank=False)  
    Password = models.CharField(null=False, blank=False, max_length=30)


class Question(models.Model):
    question_number = models.IntegerField()
    question_text = models.TextField(max_length=100)

    def __str__(self):
        return self.question_text

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    A = models.TextField(max_length=100) 
    B = models.TextField(max_length=100)
    C = models.TextField(max_length=100)

    def __str__(self):
        return str(self.question)

class Persona(models.Model):
    name = models.CharField(blank=False, max_length=20, default='Enter Persona Name')
    TextDescription = models.TextField(max_length=500, null=True)

    def __str__(self):
        return str(self.name)

#class PointsAdded:
#    def __init__ (self, ):
 #       points = PointsAdded.objects.filter(PointsAdded=self.points)
 #       return points

class AssesmentResult(models.Model):
    PersonaType = models.ForeignKey(Persona,on_delete=models.CASCADE)
    Scores = models.IntegerField(max_length=100)

    def __str__(self):
        return str(self.PersonaType)



    