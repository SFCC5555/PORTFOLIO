var v = document.getElementById("villa");
var lienzo = v.getContext("2d");
var mapa = "/static/GRANJA/tile.png";
var vacaruta = "/static/GRANJA/vaca.png";
var cerdoruta = "/static/GRANJA/cerdo.png";
var cerdoinvertidoruta = "/static/GRANJA/cerdoinvertido.png";
var polloruta = "/static/GRANJA/pollo.png";

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};

document.addEventListener("keydown", movimientoConTecla);

function movimientoConTecla(evento)
{
    switch(evento.keyCode)
    {
        case (teclas.UP):
            lienzo.drawImage(fondo,0,0);
            lienzo.drawImage(vaca,vacax,vacay);
            lienzo.drawImage(pollo,pollox,polloy);
            lienzo.drawImage(cerdo,cerdox,cerdoy)
            cerdoy-=5
        break;
        case (teclas.DOWN):
            lienzo.drawImage(fondo,0,0);
            lienzo.drawImage(vaca,vacax,vacay);
            lienzo.drawImage(pollo,pollox,polloy);
            lienzo.drawImage(cerdo,cerdox,cerdoy)
            cerdoy+=5
        break;
        case (teclas.LEFT):
            lienzo.drawImage(fondo,0,0);
            lienzo.drawImage(vaca,vacax,vacay);
            lienzo.drawImage(pollo,pollox,polloy);
            lienzo.drawImage(cerdo,cerdox,cerdoy)
            cerdox-=5
        break;
        case (teclas.RIGTH):
            lienzo.drawImage(fondo,0,0);
            lienzo.drawImage(vaca,vacax,vacay);
            lienzo.drawImage(pollo,pollox,polloy);
            lienzo.drawImage(cerdoinvertido,cerdox,cerdoy)
            cerdox+=5
        break;
    }
} 


var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);

var vaca = new Image();
vaca.src = vacaruta;
vaca.addEventListener("load", dibujar);

var cerdo = new Image();
cerdo.src = cerdoruta;
cerdo.addEventListener("load", dibujar);

var cerdoinvertido = new Image();
cerdoinvertido.src = cerdoinvertidoruta;

var pollo = new Image();
pollo.src = polloruta;
pollo.addEventListener("load", dibujar);

console.log(mapa)

function dibujar()
{
    lienzo.drawImage(fondo,0,0);
    lienzo.drawImage(vaca,vacax,vacay);
    lienzo.drawImage(cerdo,cerdox,cerdoy);
    lienzo.drawImage(pollo,pollox,polloy);
}


function aleatorio(min,max)
{
    vacax=Math.floor(Math.random()*(max-min+1))+min;
    vacay=Math.floor(Math.random()*(max-min+1))+min;
    cerdox=Math.floor(Math.random()*(max-min+1))+min;
    cerdoy=Math.floor(Math.random()*(max-min+1))+min;
    pollox=Math.floor(Math.random()*(max-min+1))+min;
    polloy=Math.floor(Math.random()*(max-min+1))+min;
}

aleatorio(0,420);

function numeros()
{   
    var n=1;
    while (n<=100)
    {
        if (n%3==0 && n%5==0)
        {   
            document.write("fizzbozz, ");
            n+=1;
        }
        
        else if (n%3==0)
        {   
            document.write("fizz, ");
            n+=1;
        }
        
        
        else if (n%5==0)
        {
            document.write("bozz, ");
            n+=1;
        }
        
        else
        {
            document.write(n+", ");
            n+=1;
        }
        
    }
}

numeros()