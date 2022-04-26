from django.shortcuts import render
from django.contrib.auth.models import User 
from rest_framework import viewsets
from rest_framework import permissions
from users.models import Question, Choice
from users.serializers import UserSerializer, QuestionSerializer, ChoiceSerializer


class usersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permissions_classes = [permissions.IsAuthenticated]


class QuestionViewSet(viewsets.ModelViewSet):
   queryset = Question.objects.all()
   serializer_class = QuestionSerializer

class ChoiceViewSet(viewsets.ReadOnlyModelViewSet):
   queryset = Choice.objects.all()
   serializer_class = ChoiceSerializer