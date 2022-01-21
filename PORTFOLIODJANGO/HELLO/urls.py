from django.urls import path
from . import views

app_name="HELLO"
urlpatterns = [
    path("",views.index0, name="index0"),
    path("<str:nombre>",views.index, name="index"),
    path("severo",views.severo, name="severo"),
    path("magu", views.magu, name="magu"),
    path("<str:name>", views.greet, name="greet")
]