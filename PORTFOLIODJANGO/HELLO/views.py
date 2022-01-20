from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return HttpResponse("Holis holis holis")

def severo(request):
    return HttpResponse("Holis Severo rey del mundo")
def magu(request):
    return HttpResponse("Hola mi amor")

def greet(request, name):
      return HttpResponse(f"Buenas buenas {name} cara de perro")  