from django.urls import path
from main import views

urlpatterns = [
    path('', views.landing, name="Landing Page"),
    #path('menu', views.menu, name="Menu"),
    path('about', views.about, name="About"),
    path('menu/burgers', views.menu_burgers, name="Burgers"),
    path('menu/pizzas', views.menu_pizzas, name="Pizzas"),
    path('menu/pastas', views.menu_pastas, name="Pastas"),
    path('menu/fries', views.menu_fries, name="Fries"),
    path('menu/drinks', views.menu_cds, name="Cold Drinks"),
    path('reservations', views.reservations, name="Reservations"),
    path('contact', views.contact, name="Contact"),
    path('login', views.login, name="Login"),
    path('signup', views.signup, name="Sign-Up"),
    path('checkout', views.checkout, name="Checkout"),
    path('bookings', views.bookings, name="Bookings"),
    path('orders', views.orders, name='Orders'),
    path('inventory', views.inventory, name="Inventory"),
    path('logout', views.logout, name="Logout"),
]