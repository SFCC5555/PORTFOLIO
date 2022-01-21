import datetime
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "BIRTHDAY/index.html")

def severob(request):
    now = datetime.datetime.now()
    return render(request, "BIRTHDAY/severob.html", {
        "birthdays": now.month == 9 and now.day == 1
    })

def magub(request):
    now = datetime.datetime.now()
    return render(request, "BIRTHDAY/magub.html", {
        "birthdaym": now.month == 7 and now.day == 24
    })

def luckyb(request):
    now = datetime.datetime.now()
    return render(request, "BIRTHDAY/luckyb.html", {
        "birthdayl": now.month == 5 and now.day == 23
    })

def otherb(request, other):
    now = datetime.datetime.now()
    return render(request, "BIRTHDAY/otherb.html", {
        "other":other.capitalize()})