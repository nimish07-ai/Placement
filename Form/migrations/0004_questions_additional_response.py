# Generated by Django 4.1 on 2022-08-09 18:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Form', '0003_alter_form_type_alter_form_visitng_record'),
    ]

    operations = [
        migrations.CreateModel(
            name='Questions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(blank=True, choices=[('UA', 'User Acceptance'), ('E', 'Extract')], max_length=3, null=True)),
                ('Text_q', models.TextField(default='')),
                ('form', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Form.form')),
            ],
        ),
        migrations.CreateModel(
            name='Additional_Response',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Answer', models.TextField(blank=True, null=True)),
                ('Question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Form.questions')),
                ('form', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Form.form')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
