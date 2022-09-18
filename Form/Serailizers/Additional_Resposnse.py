from rest_framework import serializers
from Form.models import Additional_Response


class Additional_Response_Serailizer(serializers.ModelSerializer):
    class Meta:
        model = Additional_Response
        fields = '__all__'