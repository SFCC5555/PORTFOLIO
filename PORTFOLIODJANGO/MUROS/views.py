from cmath import pi
from http.client import HTTPResponse
from django.http import HttpResponse
from django.shortcuts import render
import math
# Create your views here.
def index(request):
    H=request.GET.get("H")
    H3=request.GET.get("H3")
    B=request.GET.get("B")
    B1=request.GET.get("B1")
    B2=request.GET.get("B2")
    B3=request.GET.get("B3")
    a=request.GET.get("a")
    D=request.GET.get("D")
    
    if H==None:
        H=0
    else:
        H=float(H)
    if H3==None:
        H3=0
    else:
        H3=float(H3)
    if B==None:
        B=0
    else:
        B=float(B)
    if B1==None:
        B1=0
    else:
        B1=float(B1)
    if B2==None:
        B2=0
    else:
        B2=float(B2)
    if B3==None:
        B3=0
    else:
        B3=float(B3)
    if a==None:
        a=0
    else:
        a=float(a)
    if D==None:
        D=0
    else:
        D=float(D)
    
    teta=15
    B6=round(B-B1-B2-B3,2)
    H1=round(B6*math.tan(a*pi/180),2)
    Hp=round(H+H1,2)
    H2=round(H-H3,2)
    B4=round(H2*math.tan(teta*pi/180),2)
    B5=round(B6-B4,2)
    
    return render(request, "MUROS/index.html", {"H":H,"H3":H3,"B":B,"B1":B1,"B2":B2,"B3":B3,"a":a,"D":D,"B6":B6,"H1":H1,"Hp":Hp,"H2":H2,"B4":B4,"B5":B5})


def pruebas(request):
    return render(request, "MUROS/pruebas.html")
