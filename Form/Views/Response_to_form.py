from django.http import QueryDict
from django_filters.rest_framework import DjangoFilterBackend
from guardian.shortcuts import assign_perm
from rest_framework import viewsets, status
from rest_framework.filters import SearchFilter
from rest_framework.response import Response

from Common_modules import ModelNamePermission
from Form.Serailizers import Response_to_form_Serailizer, Additional_Response_Serailizer
from Form.models import ResponseFromUser
from UserApp.Custom_Power import Get_Allow_list_permission
from UserApp.Custom_Power.CustomViewset import CustomViewset
import logging

logger = logging.getLogger('Form_UserResponse')
def check_obj_permission(request, obj):
    # print(request.user.is_authenticated and request.method in ['GET', 'PUT', 'PATCH',
    #                                                            'DELETE'] and obj.user == request.user.id,
    #       request.user.is_authenticated, request.method in ['GET', 'PUT', 'PATCH', 'DELETE'],
    #       obj.user == request.user.id, obj.user, request.user)
    if request.user.is_authenticated and request.method in ['GET', 'PUT', 'PATCH',
                                                            'DELETE'] and obj.user == request.user:
        return True
    elif request.user.is_authenticated and request.method in ['GET'] and request.user.groups.filter(name="Faculty"):
        return True
    else:
        return False


class Response_to_form_viewset(CustomViewset, viewsets.ModelViewSet):
    queryset = ResponseFromUser.objects.all()
    serializer_class = Response_to_form_Serailizer
    permission_classes = [
        ModelNamePermission("responsefromuser", "Form", Get_Allow_list_permission, check_obj_permission), ]
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields =["id","user","Form_id","major_Response"]


    def Condition_check(self, request, queryset, *args, **kwargs):
        # return Response if condition Failes else return true at end
        if request.user.is_anonymous:
            return Response({}), False
        if request.user.groups.filter(name="Faculty"):
            queryset = queryset.filter(
                Form_id__department_related_form__Department__id=request.user.Affliated_Department.id,
                Form_id__Originator=request.user.id)
        elif request.user.groups.filter(name="Student"):
            queryset = queryset.filter(
                Form_id__department_related_form__Department__id=request.user.Affliated_Department.id,
                user=request.user.id)
        else:
            return Response({}), False

        return queryset, True



    def create(self, request, form_data=None, *args, **kwargs):
        # TODO:check if the user has allready have subitted
        data = request.data
        try:
            email = data['answer']
        except KeyError:
            return Response({'answer': "answer not found in form data"})

        request.data.update({"user": request.user.id})
        # print(request.data)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # print(serializer.is_valid(raise_exception=True))
        comment = serializer.save()

        comment.user = request.user
        comment.save()

        # TODO:add  permission
        # for x in self.list_of_permission:
        #     assign_perm(f"{x}{self.modelname}", request.user, comment)

        z = request.data["answer"]

        for x in z:
            x["user"] = request.user.id
            x["form_response"] = comment.id

        # print(z)

        try:
            a = Additional_Response_Serailizer(data=z, many=True)
            print(a.is_valid(), a.errors)
            if a.is_valid():
                # TODO add list of all created ansewer in info logger
                logger.info(f"{z}, valid")
                a.save()

        except Exception as e:
            return Response("e")

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


