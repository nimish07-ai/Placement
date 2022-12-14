# Generated by Django 4.1 on 2022-08-08 19:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, default='', max_length=50, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Department_related_form',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_of_creation', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Specific_User_Form',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_of_creation', models.DateField(auto_now_add=True)),
                ('Department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Department.department')),
            ],
        ),
    ]
