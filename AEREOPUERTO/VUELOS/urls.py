from django.urls import path

from . import views

app_name="VUELOS"

urlpatterns = [
    path("",views.index, name="index"),
]