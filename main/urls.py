from django.urls import path
from main import views

urlpatterns = [
    path('', views.landing, name="Landing Page"),
    path('menu', views.menu, name="Menu"),
]