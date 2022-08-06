from django.urls import path

from . import views
app_name="SNOW"
urlpatterns=[
    path("",views.index, name="index")
]