from django.urls import path
from . import views

app_name="GRANJA"
urlpatterns = [
    path("",views.index, name="index"),
]