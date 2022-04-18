# Generated by Django 4.0.3 on 2022-04-08 16:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_remove_user_birthday'),
    ]

    operations = [
        migrations.CreateModel(
            name='users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Username', models.CharField(max_length=30)),
                ('First_name', models.CharField(max_length=30)),
                ('Last_name', models.CharField(max_length=30)),
                ('Email', models.TextField()),
                ('Password', models.CharField(max_length=30)),
            ],
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
