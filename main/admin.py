from django.contrib import admin
from main.models import User, Orders, Reservations, Inventory
# Register your models here.


admin.site.register(User)
admin.site.register(Orders)
admin.site.register(Reservations)
admin.site.register(Inventory)