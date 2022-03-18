from django.urls import path
from . import views

app_name="PESO"
urlpatterns = [
    path("",views.index, name="index"),
]