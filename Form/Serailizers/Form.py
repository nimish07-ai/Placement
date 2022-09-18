from rest_framework import serializers

from Form.models import Form


class Form_Serailizer(serializers.ModelSerializer):
    class Meta:
        model = Form
        fields = '__all__'