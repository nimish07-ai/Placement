# Generated by Django 4.1 on 2022-08-15 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Form', '0006_form_creation_date_form_originator'),
    ]

    operations = [
        migrations.AddField(
            model_name='form',
            name='Creator_note',
            field=models.TextField(default=''),
        ),
        migrations.DeleteModel(
            name='Form_shared_creator',
        ),
    ]
