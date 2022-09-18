from django.db import models
from .User import User

class Notification(models.Model):
    message = models.TextField()
    type = models.IntegerField()
    notified_users = models.ManyToManyField(User, null = True)


# https://stackoverflow.com/questions/15177002/how-do-i-inform-a-user-if-an-event-has-been-created-by-the-admin-in-django