# Generated by Django 4.1 on 2022-09-02 17:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Form', '0010_form_expire_date_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='additional_response',
            name='form_response',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Form.responsefromuser'),
        ),
    ]