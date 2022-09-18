from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.filters import SearchFilter
from rest_framework.response import Response

from Common_modules import ModelNamePermission
from Form.Serailizers import Additional_Response_Serailizer
from Form.models import Additional_Response
from UserApp.Custom_Power import Get_Allow_list_permission
from UserApp.Custom_Power.CustomViewset import CustomViewset


class Additional_Response_viewset(CustomViewset,viewsets.ModelViewSet):

    queryset = Additional_Response.objects.all()
    serializer_class = Additional_Response_Serailizer
    permission_classes = [ModelNamePermission("additional_response", "Form",Get_Allow_list_permission),]
    filter_backends = [DjangoFilterBackend,SearchFilter]

    def Condition_check(self, request, queryset, *args, **kwargs):
        # return Response if condition Failes else return true at end
        if request.user.is_anonymous:
            return Response({}), False
        if request.user.groups.filter(name="Faculty"):
            queryset = queryset.filter(
                form__department_related_form__Department__id=request.user.Affliated_Department.id,
                form__Originator=request.user.id)
        elif request.user.groups.filter(name="Student"):
            queryset = queryset.filter(
                form__department_related_form__Department__id=request.user.Affliated_Department.id,
                user=request.user.id)
        else:
            return Response({}), False

        return queryset, True