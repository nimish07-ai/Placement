# Generated by Django 4.1 on 2022-09-02 18:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Form', '0011_additional_response_form_response'),
    ]

    operations = [
        migrations.AlterField(
            model_name='form',
            name='expire_date_time',
            field=models.DateTimeField(),
        ),
    ]