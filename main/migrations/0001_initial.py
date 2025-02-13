# Generated by Django 5.0.6 on 2024-07-07 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=150)),
                ('contact', models.CharField(max_length=14)),
                ('address', models.CharField(max_length=500, null=True)),
                ('name', models.CharField(max_length=100)),
                ('usertype', models.CharField(max_length=1)),
            ],
        ),
    ]
