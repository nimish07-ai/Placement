
def Get_Allow_list_permission(request,obj=None):
    if request.user.is_authenticated:
        if request.method in ['GET']:
            return True



def Get_Allow_obj_permission(request,obj=None):
    if request.user.is_authenticated:
        if request.method in ['GET']:
            return True


def Get_Allow_obj_permission_and_edit_only_user(request,obj=None):
    a=Get_Allow_obj_permission(request,obj=None)
    if a == True:
        return True
    else:
        if request.user.is_authenticated:
            if not request.method in ['GET'] and request.user.id == obj.id:
                print("tyr")
                return True
            else:
                print("fff")
                return False


