from django.urls import path
from . import views

app_name="PASSWORDS"
urlpatterns = [
    path("",views.index, name="index"),
    path("about",views.about, name="about"),
    path("password", views.password, name="password")
]