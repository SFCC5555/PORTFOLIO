from django import forms
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
#task = []

class NuevaTareaForm(forms.Form):
    tarea = forms.CharField(label="Nueva Tarea mijin:")
    priority = forms.IntegerField(label="Nivel de Prioridad",min_value=1, max_value=10)

# Create your views here.
def index(request):
    if "task" not in request.session:
        request.session["task"]=[]
    return render(request, "TASK/index.html", {
        "task":request.session["task"]
    })

def add(request):
    if request.method == "POST":
        form = NuevaTareaForm(request.POST)
        if form.is_valid():
           tarea =  form.cleaned_data["tarea"]
           request.session["task"] += [tarea]
           return HttpResponseRedirect(reverse("TASK:index"))
        else:
            return render(request, "TASK/add.html", {
                "form": form
            })


    return render(request, "TASK/add.html", {
        "form": NuevaTareaForm()
    })