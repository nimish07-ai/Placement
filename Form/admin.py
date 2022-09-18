from django.contrib import admin
from .models import ViewdBy, Form, ResponseFromUser,  Response_To_User, Questions, \
    Additional_Response
from django.contrib.admin import DateFieldListFilter, BooleanFieldListFilter, ChoicesFieldListFilter


class ViewdBy_model_admin(admin.ModelAdmin):
    list_display = ['Form_id', 'User', ]
    search_fields = ['User']

    class Meta:
        model = ViewdBy


# class Form_shared_creator_model_admin(admin.ModelAdmin):
#     list_display = ['Form', 'creator', "Created_on"]
#     search_fields = ['creator__First_name', ]
#     list_filter = (
#         ('Created_on', DateFieldListFilter),
#     )
#
#     class Meta:
#         model = Form_shared_creator


class ResponseFromUser_model_admin(admin.ModelAdmin):
    list_display = ['Form_id', 'major_Response', ]
    search_fields = ['Form_id']
    list_filter = (
        ('major_Response', BooleanFieldListFilter),
    )

    class Meta:
        model = ResponseFromUser


class Form_model_admin(admin.ModelAdmin):
    list_display = ["id",'Visitng_record', 'Type', "get_VisitingDate","Originator"]
    search_fields = ['Visitng_record','id']
    list_filter = (
        ('Visitng_record__visiting_date', DateFieldListFilter),
    )

    @admin.display(ordering='Visitng_record__visiting_date', description='Visting Date')
    def get_VisitingDate(self, obj):
        return obj.Visitng_record.visiting_date

    class Meta:
        model = Form


class Response_To_User_model_admin(admin.ModelAdmin):
    list_display = ['Form_id', 'User', 'response_Type']
    search_fields = ['User']
    list_filter = (
        ('response_Type', ChoicesFieldListFilter),
    )

    class Meta:
        model = Response_To_User


class Questions_model_admin(admin.ModelAdmin):
    list_display = ['form', 'Text_q', 'type']
    search_fields = ['Text_q']
    list_filter = (
        ('type', ChoicesFieldListFilter),
    )

    class Meta:
        model = Questions


class Additional_Response_model_admin(admin.ModelAdmin):
    list_display = ['form', 'Answer', 'Question']

    # search_fields = ['User']
    # list_filter = (
    #     ('response_Type', ChoicesFieldListFilter),
    # )

    class Meta:
        model = Additional_Response


admin.site.register(Form, Form_model_admin)
admin.site.register(ViewdBy, ViewdBy_model_admin)
admin.site.register(ResponseFromUser, ResponseFromUser_model_admin)
# admin.site.register(Form_shared_creator, Form_shared_creator_model_admin)
admin.site.register(Response_To_User, Response_To_User_model_admin)
admin.site.register(Questions, Questions_model_admin)
admin.site.register(Additional_Response, Additional_Response_model_admin)
