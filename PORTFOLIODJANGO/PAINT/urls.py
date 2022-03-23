from django.urls import path
from . import views

app_name="PAINT"
urlpatterns = [
    path("",views.index, name="index"),
]