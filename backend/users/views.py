from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User
from users.serializers import UserSerializer


class User(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
   queryset = User.objects.all()
   serializer_class = UserSerializer