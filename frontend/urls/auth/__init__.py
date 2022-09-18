from django.urls import path, include

from frontend.Views import BaseReactView, DefaultVerifyReactView
from django.contrib.auth.decorators import login_required
from .UserSettings import urlpatterns as Setting_urlpattern

urlpatterns = [
    path('login/',BaseReactView.as_view(),name="Login"),
    path('signup/',BaseReactView.as_view(),name="signup"),


    path('profile/',login_required(DefaultVerifyReactView.as_view(template_name="Profile\profile.html")),name="profile"),

    # path('verify/',login_required(BaseReactView.as_view()),name="verify"),
    #


    path('forgotPassword/',BaseReactView.as_view(),name="reset-password-email-enter-frontend"),
    path('forgotPasswordReset/',BaseReactView.as_view(),name="reset-password-confirm-frontend"),

    path('emailverifysent/',BaseReactView.as_view(),name="emailverifysent"),
    path('emailverifyconform/',login_required(BaseReactView.as_view()),name="emailverifyconform"),

    path('settings/',include(Setting_urlpattern),name="profile"),

]

