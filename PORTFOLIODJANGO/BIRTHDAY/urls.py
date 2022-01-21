from django.urls import path

from . import views

urlpatterns=[
    path("",views.index, name="index"),
    path("severo",views.severob, name="severo"),
    path("magu",views.magub, name="magu"),
    path("lucky", views.luckyb, name="lucky"),
    path("<str:other>", views.otherb, name="other")
]