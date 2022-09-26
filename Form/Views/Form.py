from django_filters.rest_framework import DjangoFilterBackend
from guardian.shortcuts import assign_perm
from rest_framework import status
from rest_framework.filters import SearchFilter
from rest_framework.response import Response
from Common_modules import Gurdian_model_viewset, ModelNamePermission
from Department.Serailizer import Department_related_form_Serailizer
from Form.Serailizers import Form_Serailizer, Questions_Serailizer
from Form.models import Form
from django_filters import rest_framework as filters

from UserApp.Custom_Power import Get_Allow_list_permission
from UserApp.Custom_Power.CustomViewset import CustomViewset
import logging


logger = logging.getLogger('Form_Admin_Logger')
Depertment_logger = logging.getLogger('Department_Logger')
class FormFilter(filters.FilterSet):
    start_date = filters.DateFilter(label="start_date", field_name="Creation_Date", lookup_expr="gte")
    end_date = filters.DateFilter(label="end_date", field_name="Creation_Date", lookup_expr="lte")
    id = filters.NumberFilter(label="id", field_name="id", lookup_expr="exact")
    Originator = filters.NumberFilter(label="Originator", field_name="Originator", lookup_expr="exact")
    # ToDO check expirey

    class Meta:
        model = Form
        fields = ["Creation_Date", "id", 'Originator']


class Form_viewset(CustomViewset,Gurdian_model_viewset):
    queryset = Form.objects.all()
    serializer_class = Form_Serailizer

    permission_classes = [ModelNamePermission("form", "Form",custom_check_object=Get_Allow_list_permission),]

    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_class = FormFilter
    search_fields = ["Company_name"]
    modelname = "form"

    def filter_returner(self, queryset, request):
        return queryset.filter(department_related_form__Department__id=request.user.Affliated_Department.id)

    def create(self, request, form_data=None, *args, **kwargs):

        data = request.data
        try:
            email = data['questions']
        except KeyError:
            return Response({'questions': "questions not found in form data"})

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        comment = serializer.save()
        comment.Originator=request.user
        comment.save()


        for x in self.list_of_permission:
            assign_perm(f"Form.{x}{self.modelname}", request.user, comment)


        z = request.data["questions"]
        for x in z:
            x["form"] = comment.id



        """
        {
        "posts": null,
        "Department": null
        }
        """

        try:
            a = Questions_Serailizer(data=z, many=True)
            if a.is_valid():
                a.save()
            logger.info(f'form creation completed {a.id}')
        except Exception as e:
            logger.error(f'{e} data= {data}')
            return Response({"error":"Some internal error"},status=status.HTTP_500_INTERNAL_SERVER_ERROR)


        try:
            a=Department_related_form_Serailizer(data={
                "posts": comment.id,
                "Department": request.user.Affliated_Department.id
            })
            if a.is_valid():
                a.save()

            Depertment_logger.info(f"{a.id} added in department {request.user.Affliated_Department.id}")

        except Exception as e:
            Depertment_logger.error(f'{e} data= {data}')

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
