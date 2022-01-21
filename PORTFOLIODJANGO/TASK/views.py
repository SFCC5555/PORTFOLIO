from django.shortcuts import render

task = ["comer", "dormir", "jugar"]
# Create your views here.
def index(request):
    return render(request, "TASK/index.html", {
        "task":task
    })

def add(request):
    return render(request, "TASK/add.html")