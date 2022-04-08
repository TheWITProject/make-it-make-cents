from django.shortcuts import render
# Create your views here.
from django.contrib.auth.models import users  #login
from rest_framework import viewsets
from rest_framework import permissions
from users.serializers import usersSerializer #loginSerializer


class usersViewSet(viewsets.ModelViewSet):
    queryset = users.objects.all().order_by('-date_joined')
    serializer_class = usersSerializer
    permissions_classes = [permissions.IsAuthenticated]


#class loginViewSet(viewsets.ModelViewSet):
#   queryset = login.objects.all()
#   serializer_class = loginSerializer
#   permissions_classes = [permissions.IsAuthenticated]