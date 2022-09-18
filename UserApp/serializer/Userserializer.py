from django.core.validators import validate_email
from rest_framework import serializers
from UserApp.models import User


class Userserializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = '__all__'
        read_only_fields = ['last_login','url',"email",'phone_number']
        exclude = ['user_permissions','groups','password','re_password','is_active','is_staff','is_superuser','email_token','email_token_dateTime_expire',"is_suspended","last_login"]

