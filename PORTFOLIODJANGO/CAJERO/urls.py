from django.urls import path
from . import views

app_name="CAJERO"
urlpatterns = [
    path("",views.index, name="index")
]