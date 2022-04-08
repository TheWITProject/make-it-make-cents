from django.contrib.auth.models import users
from backend.users.models import login
from rest_framework import serializers
 #from rest_framework import users 

class usersSerializer(serializers.ModelSerializer):
    users = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all())
    class Meta:
        model = users
        fields = ['First_name', 'Last_name', 'Username', 'Email', 'Password']

#class loginSerializer(serializers.ModelSerializer):
    #class Meta:
     #   model = login
     #   fields = ['Username', 'Password']

