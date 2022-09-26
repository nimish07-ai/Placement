from guardian.shortcuts import assign_perm
from rest_framework import viewsets, status
from rest_framework.response import Response


class Gurdian_model_viewset(viewsets.ModelViewSet):
    """
        :req fields
        modelname = name of the model
        list_of_permission = exend list of permissions
    """

    modelname = None

    list_of_permission = ["change_", 'delete_']

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        comment = serializer.save()

        for x in self.list_of_permission:
            # print(f"{x}{self.modelname}")
            assign_perm(f"{x}{self.modelname}", request.user, comment)



        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
