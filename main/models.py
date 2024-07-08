from django.db import models

# Create your models here.
class User(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(null=False)
    password = models.CharField(null=False, max_length=150)
    contact = models.CharField(null=False, max_length=14)
    address = models.CharField(null=True, max_length=500)
    name = models.CharField(null=False, max_length=100)
    usertype = models.CharField(null=False, max_length=1)

class Orders(models.Model):
    id = models.AutoField(primary_key=True)
    cust_id = models.IntegerField(null=False)
    name = models.CharField(max_length=150, null=False)
    items = models.JSONField(null=True)
    delivery = models.CharField(max_length=100, null=False)
    address = models.CharField(max_length=500, null=False)
    amount = models.IntegerField(null=False)
    date = models.CharField(null=False, max_length=100)
    time = models.CharField(null=False, max_length=100)
    instructions = models.CharField(null=True, max_length=2000)
    order_complete = models.BooleanField(null=False)

class Reservations(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150, null=False)
    number = models.CharField(max_length=14, null=False)
    date = models.CharField(max_length=100, null=False)
    time = models.CharField(null=False, max_length=100)
    number_of_people = models.IntegerField(null=False)
    table_number = models.IntegerField(null=False)

class Inventory(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150, null=False)
    amount = models.IntegerField(null=False)