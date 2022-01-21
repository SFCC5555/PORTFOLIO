from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index0(request):
    return render(request, "HELLO/index0.html")

def index(request, nombre):
    return render(request, "HELLO/index.html", {"nombre":nombre.capitalize()})

def severo(request):
    return HttpResponse("Hola Severo rey del mundo")

def magu(request):
    return HttpResponse("Hola Magu reina del mundo")

def greet(request, name):
    return HttpResponse(f"Hola {name.capitalize()} cara de perro")
