from rest_framework import serializers
from rest_framework_bulk import BulkSerializerMixin ,BulkListSerializer

from Form.models import Questions


class Questions_Serailizer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields = '__all__'



