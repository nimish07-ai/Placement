from django.http import HttpResponseRedirect
from django.urls import reverse

from frontend.Views import BaseReactView


def Verifie(request):
    if request.path != reverse("verify"):
        if request.user.is_authenticated == True and request.user.email_verified == False:
            return HttpResponseRedirect(reverse("verify"))
    return True


class DefaultVerifyReactView(BaseReactView):

    def condition_Check(self, request, context):
        self.condition_check_Function.append(Verifie)
        return super().condition_Check(request, context)
