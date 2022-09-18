from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.filters import SearchFilter

from Department.Serailizer import Department_related_form_Serailizer
from Department.models import Department_related_form

class Department_related_form_viewset(viewsets.ModelViewSet):

    queryset = Department_related_form.objects.all()
    serializer_class = Department_related_form_Serailizer


    filter_backends = [DjangoFilterBackend,SearchFilter]
    filterset_fields =["id","posts","date_of_creation"]
    search_fields = ["name"]
