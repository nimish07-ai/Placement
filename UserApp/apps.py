from django.apps import AppConfig



class UserappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'UserApp'

    def ready(self):
        try:
            from django.contrib.auth.models import Group, Permission
            from guardian.shortcuts import assign_perm
            stu, created_stu=Group.objects.get_or_create(name='Student')
            group, created=Group.objects.get_or_create(name='Faculty')
            group_head, created_head=Group.objects.get_or_create(name='Head')
            permissions_list = Permission.objects.exclude(content_type__app_label='UserApp', content_type__model='user')
            group.permissions.set(permissions_list)
            assign_perm(f"UserApp.view_user", group)
            assign_perm(f"Form.view_form", stu)
            assign_perm(f"Form.add_responsefromuser", stu)
            assign_perm(f"Form.view_responsefromuser", stu)
            assign_perm(f"Form.view_response_to_user", stu)
        except Exception as e:
            print(e)
