from http.client import HTTPResponse
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "SECRETNUMBER/index.html")

def secretnumber(request):

    x=(request.GET.get('x'))
    
    if x == "h":
        n="Alto mijin"
    elif x== "l":
        n="Bajo mijin"
    else:
        n="Exacto mijin"


    return render(request, "SECRETNUMBER/index.html", {
        "n":n
    })
