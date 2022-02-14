from django.urls import path

from . import views
app_name="SECRETNUMBER"
urlpatterns=[
    path("",views.index, name="index")
]