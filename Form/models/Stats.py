from django.db import models
from UserApp.models import User
from .Form import Form

class ViewdBy(models.Model):
    Form_id=models.ForeignKey(Form,on_delete=models.CASCADE)
    User=models.ForeignKey("UserApp.User",on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.Form_id} -> {self.User}"