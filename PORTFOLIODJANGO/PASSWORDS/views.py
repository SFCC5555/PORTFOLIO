from http.client import HTTPResponse
from django.http import HttpResponse
from django.shortcuts import render
import random

# Create your views here.
def index(request):
    return render(request, "PASSWORDS/index.html")

def about(request):
    return render(request, "PASSWORDS/about.html")

def password(request):
    caracteres=list('abcdefghijklmnñopqrstuvwxyz')
    congen=""

    longitud= int(request.GET.get('length'))

    if request.GET.get('Mayuscula'):
        caracteres.extend(list('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'))

    if request.GET.get('Especiales'):
        caracteres.extend(list('!#$%&/=?¡¿'))
    
    if request.GET.get('Numeros'):
        caracteres.extend(list('0123456789'))
    
    for c in range(longitud):
        congen+= random.choice(caracteres)

    return render(request, "PASSWORDS/password.html", {
        "congen":congen
    })

