from django.db import models
# from UserApp.models import User
from .Form import Form


class Response_To_User(models.Model):
    Form_id = models.ForeignKey(Form, on_delete=models.CASCADE)
    User = models.ForeignKey("UserApp.User", on_delete=models.CASCADE)
    response_Type = models.CharField(choices=[("placed", "placed"), ("selected", "selected")], max_length=20, null=True,
                                     blank=True)

    # include department if necessary for query

    class Meta:
        unique_together = ('Form_id', 'User','response_Type')

    def __str__(self):
        return f"{self.Form_id} -> {self.User} ={self.response_Type}"
