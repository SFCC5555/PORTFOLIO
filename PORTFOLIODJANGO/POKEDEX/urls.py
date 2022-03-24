from django.urls import path
from . import views

app_name="POKEDEX"
urlpatterns = [
    path("",views.index, name="index"),
]