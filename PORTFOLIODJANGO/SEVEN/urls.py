from django.urls import path

from . import views
app_name="SEVEN"
urlpatterns=[
    path("",views.index, name="index")
]