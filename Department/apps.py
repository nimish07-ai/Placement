from django.apps import AppConfig




class DepartmentConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'Department'

    def ready(self):
        try:
            from Department.models import Department
            for x in ["Department Of Information Technology","Department Of Chemical Engineering",
                      "Department Of Computer Science","Department Of Electronics and Telecomnications"
                                                       "Department Of Instrumental","Department Of Mechinical engineering"]:
                Department.objects.get_or_create(name=x)
        except Exception as e:
            print(e)
