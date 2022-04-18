from django.contrib.auth.models import User
#from backend.users.models import login #error no module named backend, i think this isn't linked correctly
from rest_framework import serializers
 #from rest_framework import users 

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password', 'id']

#class loginSerializer(serializers.ModelSerializer):
    #class Meta:
     #   model = login
     #   fields = ['Username', 'Password']

