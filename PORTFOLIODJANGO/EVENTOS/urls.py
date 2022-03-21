from django.urls import path
from . import views

app_name="EVENTOS"
urlpatterns = [
    path("",views.index, name="index"),
]