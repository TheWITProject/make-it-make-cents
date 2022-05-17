from django.contrib.auth.models import User
from users.models import Question, Choice, AssessmentResult
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password', 'id']

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['question_number', 'question_text']

class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
       model = Choice
       fields = ['question', 'A', 'B','C']

class AssessmentResultSerializer(serializers.ModelSerializer):
    class Meta:
       model = AssessmentResult
       fields = ['personatype', 'scores']
