from django.db import models


# Create your models here.

class Department(models.Model):
    name = models.CharField(default="", max_length=50, blank=True, null=True)

    def __str__(self):
        return f'{self.name}'


def check_if_all_dep_present():
    for x in ["Department Of Information Technology","Department Of Chemical Engineering",
              "Department Of Computer Science","Department Of Electronics and Telecomnications"
              "Department Of Instrumental","Department Of Mechinical engineering"]:
        pass
        # if not Department.objects.get(name=x).exists():
        #     Department.objects.create(name=x).save()

        #     try:
        # if not Department.objects.get(name=x).exists():
        #     pass
        # except Department.DoesNotExist:
        # Department.objects.create(name=x).save()


# check_if_all_dep_present()