from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.filters import SearchFilter

from Common_modules import Gurdian_model_viewset,ModelNamePermission
from Company.serializer import Company_Serailizer
from Company.models import Company

class Company_viewset(Gurdian_model_viewset):

    queryset = Company.objects.all()
    serializer_class = Company_Serailizer
    permission_classes = [ModelNamePermission("company", "Company")]
    modelname="company"

    filter_backends = [DjangoFilterBackend,SearchFilter]
    filterset_fields =["id",]
    search_fields = ["Company_name"]