from django.urls import path
from . import views

app_name="MUROS"
urlpatterns = [
    path("",views.index, name="index"),
    path("pruebas",views.pruebas, name="pruebas")
]