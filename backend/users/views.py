from django.shortcuts import render
from django.contrib.auth.models import User 
from rest_framework import viewsets
from rest_framework import generics
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import permissions
from users.models import Question, Choice
from users.serializers import UserSerializer, QuestionSerializer, ChoiceSerializer


class usersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permissions_classes = [permissions.IsAuthenticated]

class Question(generics.ListAPIView):
   queryset = Question.objects.all()
   model = Question
   serializer_class = QuestionSerializer
   filter_backends = [DjangoFilterBackend]
   filterset_fields = ['question_number', 'question_text']



class Choice(generics.ListAPIView):
   queryset = Choice.objects.all()
   model = Choice
   serializer_class = ChoiceSerializer
   filter_backends = [DjangoFilterBackend]
   filterset_fields = ['question']
