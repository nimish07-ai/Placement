from rest_framework import viewsets
from Department.Serailizer import Specific_User_Form_Serailizer
from Department.models import Specific_User_Form

class Specific_User_Form_viewset(viewsets.ModelViewSet):

    queryset = Specific_User_Form.objects.all()
    serializer_class = Specific_User_Form_Serailizer
