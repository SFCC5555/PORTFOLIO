from django.urls import path

from . import views
app_name="PPT"
urlpatterns=[
    path("",views.index, name="index")
]