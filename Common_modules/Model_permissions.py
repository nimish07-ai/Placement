from rest_framework import permissions


def ModelNamePermission(ModelName: str, AppName: str,custom_check_view=None, custom_check_object=None, ):
    class ModelNamePermission_Class(permissions.BasePermission):

        """
        Custom permission to only allow owners of an object to edit it.
        """

        modelname = ModelName
        appname = AppName

        def has_permission(self, request, view):
            # print(request.user.groups.all()[0].permissions.all()[4].codename)

            # print(request.user.has_perm("Company.view_company"))

            if custom_check_view is not None:
                res = custom_check_view(request)
                if res:
                    return True
                elif res == False:
                    return False

            if request.user.is_authenticated:
                if request.method in ['GET']:
                    return request.user.has_perm(f'{self.appname}.view_{self.modelname}')
                if request.method in ['POST']:
                    return request.user.has_perm(f'{self.appname}.add_{self.modelname}')
                if request.method in ['PUT', 'PATCH']:
                    return request.user.has_perm(f'{self.appname}.change_{self.modelname}')
                if request.method in ['DELETE']:
                    return request.user.has_perm(f'{self.appname}.delete_{self.modelname}')
            return False

        def has_object_permission(self, request, view, obj):
            if custom_check_object is not None:
                res = custom_check_object(request,obj)
                if res:
                    return True
                elif res == False:
                    return False


            if request.user.is_authenticated:
                if request.method in ['GET']:
                    return request.user.has_perm(f'{self.appname}.view_{self.modelname}', obj)
                if request.method in ['POST']:
                    return request.user.has_perm(f'{self.appname}.add_{self.modelname}', obj)
                if request.method in ['PUT', 'PATCH']:
                    return request.user.has_perm(f'{self.appname}.change_{self.modelname}', obj)
                if request.method in ['DELETE']:
                    return request.user.has_perm(f'{self.appname}.delete_{self.modelname}', obj)

            return False

    return ModelNamePermission_Class
