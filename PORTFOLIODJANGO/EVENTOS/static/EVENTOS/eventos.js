var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};

console.log(teclas);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle= color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
    
}

document.addEventListener("keydown", dibujoConTecla);

var xi=150;
var yi=150;
var x=150;
var y=150;

function dibujoConTecla(evento)
{
    switch(evento.keyCode)
    {
        case (teclas.UP):
            xi=x
            yi=y
            y-=10
            dibujarLinea("red",xi,yi,x,y);
        break;
        case (teclas.DOWN):
            xi=x
            yi=y
            y+=10
            dibujarLinea("blue",xi,yi,x,y);
        break;
        case (teclas.LEFT):
            xi=x
            yi=y
            x-=10
            dibujarLinea("yellow",xi,yi,x,y);
        break;
        case (teclas.RIGTH):
            xi=x
            yi=y
            x+=10
            dibujarLinea("green",xi,yi,x,y);
        break;
    }
} 


