from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.filters import SearchFilter

from Form.Serailizers import Stats_Serailizer
from Form.models import ViewdBy

class Stats_viewset(viewsets.ModelViewSet):

    queryset = ViewdBy.objects.all()
    serializer_class = Stats_Serailizer

    filter_backends = [DjangoFilterBackend,SearchFilter]



