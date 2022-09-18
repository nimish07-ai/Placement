from rest_framework import serializers

from Department.models import Department


class Department_Serailizer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'