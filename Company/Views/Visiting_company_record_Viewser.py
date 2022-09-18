# from rest_framework.decorators import action
# from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets

from Common_modules import ModelNamePermission
from Company.serializer import Visiting_company_record_Serailizer
from Company.models import Visiting_company_record

class Visiting_company_record_viewset(viewsets.ModelViewSet):
    serializer_class=Visiting_company_record_Serailizer
    queryset = Visiting_company_record.objects.all()
    permission_classes = [ModelNamePermission("visiting_company_record", "Company")]

    filter_backends = [DjangoFilterBackend]
    filterset_fields =["company"]


