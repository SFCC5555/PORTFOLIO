from django.urls import path
from . import views

app_name="TRESENRAYA"
urlpatterns = [
    path("",views.index, name="index")
]