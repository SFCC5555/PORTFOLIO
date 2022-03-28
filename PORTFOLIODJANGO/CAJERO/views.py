from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "CAJERO/index.html")

def conpython(request):
    
    billetes = [50,20,10]
    cantidad = [50,100,200]
    
    c=(request.GET.get("dar"))

    if c==None:
        c=0
    else:
        

        
        r= int(c)+1
    
        s= r + 2

        k= r+2

    z="Probando probando "
    
    return render(request, "CAJERO/conpython.html", {"z":z,"c":c,"s":s,"k":k,"r":r})