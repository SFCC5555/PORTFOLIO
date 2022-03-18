from django.urls import path
from . import views

app_name="CANVAS"
urlpatterns = [
    path("",views.index, name="index")
]