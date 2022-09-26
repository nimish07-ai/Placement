from django.urls import path, include

from .auth import urlpatterns as Authurlpatterns
from ..Views import BaseReactView
from .Dashboard import urlpatterns as dashboardurlpatterns
from .Timeline import urlpatterns as Timelineurlpatterns
from .errors import urlpatterns as Errorurlpatterns,hoc


urlpatterns = [
    path('timeline/', include(Timelineurlpatterns), name="Timelineurlpatterns"),
    path('dashboard/', include(dashboardurlpatterns), name="dashboardurlpatterns"),
    path('auth/', include(Authurlpatterns), name="Authurlpatterns"),
    path('errors/',include(Errorurlpatterns),name="Errorurlpatterns"),
    path('logs/', include('log_viewer.urls')),
    path('',BaseReactView.as_view(),name="Landing"),

]



