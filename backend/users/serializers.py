from rest_framework import serializers
from users.models import Register, Login

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register 
        fields = ('username', 'password', 'birthday', 'email' ) 

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ('username', 'password')         