from ast import Str
from http.client import HTTPResponse
from tokenize import String
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    numero=request.GET.get("numero")

    if numero==None:
        P="Número no ingresado"
    else:
        for i in list(numero):
            if i in list("abcdefghijklmnñopqrstuvwxyz,.;:-_{[+*´¨}]¿¡'?=)(/&%$#°|"):
                P="No se admiten letras o caracteres especiales. Ingrese un número entero"
                break
            elif int(numero)%2==0:
                P=f"{numero} es un número PAR"
            elif int(numero)%2!=0:
                P=f"{numero} es un número IMPAR"

    return render(request, "PROGRAMS/index.html", {"P":P})
