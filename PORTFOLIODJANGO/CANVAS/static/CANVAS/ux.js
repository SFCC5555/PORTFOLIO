alert("hola hola hola mis pequeños druguis");

var n=document.getElementById("numero");
var b=document.getElementById("boton");
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

b.addEventListener("click", dibujoPorClick);

function dibujoPorClick()
{
    var x= parseInt(n.value);
    alert(x)

    var lineas = x;
    var l = 0;
    var q = 300/x

    while (l<=lineas)
    {
    dibujarLinea("teal",0,(l*q),(l*q),300)
    dibujarLinea("magenta",300,(l*q),(300-(l*q)),300)
    dibujarLinea("gold",300,(l*q),((l*q)),0)
    dibujarLinea("yellowgreen",0,(l*q),(300-(l*q)),0)
    l+=1
    } 

    dibujarLinea("teal",210,95,95,95);
    dibujarLinea("teal",95,95,95,155);
    dibujarLinea("teal",95,155,195,155);
    dibujarLinea("teal",195,155,195,195);
    dibujarLinea("teal",195,195,90,195);

    dibujarLinea("yellow",210,90,90,90);
    dibujarLinea("yellow",90,90,90,160);
    dibujarLinea("yellow",90,160,190,160);
    dibujarLinea("yellow",190,160,190,190);
    dibujarLinea("yellow",190,190,90,190);

    dibujarLinea("black",210,100,100,100);
    dibujarLinea("black",100,100,100,150);
    dibujarLinea("black",100,150,200,150);
    dibujarLinea("black",200,150,200,200);
    dibujarLinea("black",200,200,90,200);

    dibujarLinea("magenta",210,105,105,105);
    dibujarLinea("magenta",105,105,105,145);
    dibujarLinea("magenta",105,145,205,145);
    dibujarLinea("magenta",205,145,205,205);
    dibujarLinea("magenta",205,205,90,205);

    dibujarLinea("yellowgreen",210,110,110,110);
    dibujarLinea("yellowgreen",110,110,110,140);
    dibujarLinea("yellowgreen",110,140,210,140);
    dibujarLinea("yellowgreen",210,140,210,210);
    dibujarLinea("yellowgreen",210,210,90,210);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle= color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
    
}

