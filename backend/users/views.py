from django.shortcuts import render
# Create your views here.
from django.contrib.auth.models import User  #login
from rest_framework import viewsets
from rest_framework import permissions
from users.serializers import UserSerializer #loginSerializer


class usersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permissions_classes = [permissions.IsAuthenticated]


#class loginViewSet(viewsets.ModelViewSet):
#   queryset = login.objects.all()
#   serializer_class = loginSerializer
#   permissions_classes = [permissions.IsAuthenticated]