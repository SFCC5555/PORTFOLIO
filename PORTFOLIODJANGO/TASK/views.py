from django import forms
from django.shortcuts import render

task = []

class NuevaTareaForm(forms.Form):
    tarea = forms.CharField(label="Nueva Tarea mijin:")
    priority = forms.IntegerField(label="Nivel de Prioridad",min_value=1, max_value=10)

# Create your views here.
def index(request):
    return render(request, "TASK/index.html", {
        "task":task
    })

def add(request):
    if request.method == "POST":
        form = NuevaTareaForm(request.POST)
        if form.is_valid():
           tarea =  form.cleaned_data["tarea"]
           task.append(tarea)
        else:
            return render(request, "TASK/add.html", {
                "form": form
            })


    return render(request, "TASK/add.html", {
        "form": NuevaTareaForm()
    })