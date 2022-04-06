from rest_framework import serializers
#from users.models import Register, Login

class UsersSerializer(serializers.Serializer):
     Username : serializers.CharField(blank=False, null=False, max_length=30)
     Password : serializers.CharField(blank=False, null=False, max_length=30)
     Email : serializers.EmailField(blank=False, null=False)

        