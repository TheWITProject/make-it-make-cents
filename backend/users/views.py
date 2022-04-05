from django.shortcuts import render
from rest_framework import viewsets

from users.serializers import RegisterSerializer, LoginSerializer
from users.models import Register, Login


class RegisterViewSet(viewsets.ModelViewSet):
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer


class LoginViewSet(viewsets.ModelViewSet):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer


def register_create(request):
    return render(
        request,
        'users/register_list.html',
        {}
    )

def login_create(request):
    return render(
        request,
        'users/login_list.html',
        {}
    )
