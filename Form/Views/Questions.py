from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, status
from rest_framework.filters import SearchFilter
from rest_framework.response import Response

from Common_modules import ModelNamePermission
from Form.Serailizers import Questions_Serailizer
from Form.models import Questions
from UserApp.Custom_Power import Get_Allow_list_permission
from UserApp.Custom_Power.CustomViewset import CustomViewset

def check_obj_permission(request,obj):
    if request.user.is_authenticated and request.method in ['GET']:
        return True
    else:
        return False



class Questions_viewset( CustomViewset,viewsets.ModelViewSet):

    queryset = Questions.objects.all()
    serializer_class = Questions_Serailizer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    permission_classes = [ModelNamePermission("questions", "Form",custom_check_object=Get_Allow_list_permission),]

    def filter_returner(self, queryset, request):
        return queryset.filter(form__department_related_form__Department__id=request.user.Affliated_Department.id)


def create(self, request,*args,**kwargs):
        response = {'message': 'Create function is not offered in this path.'}
        return Response(response, status=status.HTTP_403_FORBIDDEN)



