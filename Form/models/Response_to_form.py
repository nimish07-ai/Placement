from django.db import models
from UserApp.models import User
from .Form import Form


class ResponseFromUser(models.Model):
    Form_id=models.ForeignKey(Form,on_delete=models.CASCADE)

    major_Response=models.BooleanField(default=False)

    user=models.ForeignKey("UserApp.User",on_delete=models.CASCADE,null=True)
    # include department if necessary for query

    def __str__(self):
        return f"{self.Form_id} -> {self.user} ={self.major_Response}"



