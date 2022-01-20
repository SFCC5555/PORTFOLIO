from django.urls import path
from . import views

urlpatterns = [
    path("",views.index, name="index"),
    path("severo",views.severo, name="severo"),
    path("magu",views.magu, name="magu"),
    path("<str:name>", views.greet, name="greet")

]