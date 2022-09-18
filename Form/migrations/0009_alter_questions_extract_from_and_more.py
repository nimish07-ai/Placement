# Generated by Django 4.1 on 2022-09-02 16:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Form', '0008_alter_form_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questions',
            name='Extract_from',
            field=models.TextField(blank=True, default='[]'),
        ),
        migrations.AlterField(
            model_name='responsefromuser',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]