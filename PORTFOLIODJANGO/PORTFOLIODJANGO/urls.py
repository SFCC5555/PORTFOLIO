"""PORTFOLIODJANGO URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('GALERIA/',include("GALERIA.urls")),
    path('MUROS/', include("MUROS.urls")),
    path('TRESENRAYA/', include("TRESENRAYA.urls")),
    path('HELLO/', include("HELLO.urls")),
    path('BIRTHDAY/', include("BIRTHDAY.urls")),
    path('TASK/', include("TASK.urls")),
    path('SFCCWEBSERVICES/', include("SFCCWEBSERVICES.urls")),
    path('RADARCHART/', include("RADARCHART.urls")),
    path('PASSWORDS/', include("PASSWORDS.urls")),
    path('PROGRAMS/', include("PROGRAMS.urls")),
    path('SECRETNUMBER/', include("SECRETNUMBER.urls")),
    path('PESO/', include("PESO.urls")),
    path('CANVAS/', include("CANVAS.urls")),
    path('EVENTOS/', include("EVENTOS.urls")),
    path('PAINT/', include("PAINT.urls")),
    path('GRANJA/', include("GRANJA.urls")),
    path('POKEDEX/', include("POKEDEX.urls")),
    path('CAJERO/', include("CAJERO.urls")),
    ]
