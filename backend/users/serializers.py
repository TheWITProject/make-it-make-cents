from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework import users

class usersSerializer(serializers.ModelSerializer):
    users = serializers.PrimaryKeyRelatedField((many=True, queryset=User.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'users']