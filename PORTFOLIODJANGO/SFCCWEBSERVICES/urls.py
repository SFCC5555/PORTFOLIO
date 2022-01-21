from django.urls import path
from . import views

app_name="SFCCWEBSERVICES"
urlpatterns = [
    path("",views.index, name="index")
]