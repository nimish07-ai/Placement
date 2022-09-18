from django.db import models
from .Department import Department
from Form.models import Form


class Specific_User_Form(models.Model):
    posts = models.ForeignKey(Form, on_delete=models.CASCADE)
    user = models.ManyToManyField("UserApp.User", )
    Department = models.ForeignKey(Department, on_delete=models.CASCADE)
    date_of_creation = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.posts} {self.date_of_creation}'
