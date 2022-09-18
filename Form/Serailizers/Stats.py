from rest_framework import serializers

from Form.models import ViewdBy


class Stats_Serailizer(serializers.ModelSerializer):
    class Meta:
        model = ViewdBy
        fields = '__all__'