from rest_framework import serializers
from Form.models import ResponseFromUser


class Response_to_form_Serailizer(serializers.ModelSerializer):
    class Meta:
        model = ResponseFromUser
        fields = '__all__'