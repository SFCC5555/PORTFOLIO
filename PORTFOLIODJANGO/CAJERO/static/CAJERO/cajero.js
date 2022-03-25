var bt=document.getElementById("boton");
var rt=document.getElementById("resultado");
var n=document.getElementById("dar");
n.value=0;
var z=0;

bt.addEventListener("click", dinero);
document.addEventListener("keydown", enter);

function enter(evento)
{
    if (evento.key=="Enter")
    {
        dinero()
    }
    
}

class Billete
{
    constructor(nombre,valor,cantidad)
    {
        this.nombre = nombre;
        this.valor = valor;
        this.cantidad = cantidad;
        this.dinero = valor*cantidad;
    }
}

var  billetes= [];
billetes.push(new Billete("Cincuenta", 50, 50));
billetes.push(new Billete("Veinte", 20, 100));
billetes.push(new Billete("Diez", 10, 150));


var total = (billetes[0].dinero+billetes[1].dinero+billetes[2].dinero);
rt.innerHTML= "Dinero disponible: "+total+"<br/><br/>"+"Dinero retirado: "+z+"<br/><br/>";
function dinero()
{   
    rt.innerHTML= "Dinero disponible: "+total+"<br/><br/>"+"Dinero retirado: "+z+"<br/><br/>";
    n=document.getElementById("dar");
    c= parseInt(n.value);
    
    rt.innerHTML += "Total ha retirar "+c+" $<br/><br/>";
    
    if (total==0)
    {
        rt.innerHTML += "CAJERO VACÍO";
    }
    
    else if (c>total)
    {
        rt.innerHTML += "Dinero insuficiente en el cajero, seleccionar una cantidad menor o igual a: "+total+" $";

    }

    else if (c<=0)
    {
        rt.innerHTML += "Cantidad erronea no números negativos ni cero";
    }

    else if (c%10==0)
    {   
        z+=c
        var dineroretirado = c;
        total -= dineroretirado;
        rt.innerHTML = "Dinero disponible: "+total+"<br/><br/>"+"Dinero retirado: "+z+"<br/><br/>" + "Total ha retirar "+c+" $<br/><br/>";
        for (b of billetes)
        {
            n=parseInt(c/b.valor)
            if (n==0)
            {

            }
            
            else if (n<=b.cantidad)
            {
                r=c%b.valor
                c=r
                rt.innerHTML += n+" billetes de "+b.valor+" $ <br/>";
            }
            else
            {
                n=b.cantidad
                r=c-b.dinero
                c=r
                rt.innerHTML += n+" billetes de "+b.valor+" $ <br/>";
            }
        }
        
    }

    else
    {
        rt.innerHTML += "Cantidad erronea no hay billetes menores a 10$";
    }
}
