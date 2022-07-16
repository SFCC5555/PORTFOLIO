var p1=document.getElementById("player1");
var lienzo1 = p1.getContext("2d");
var p2=document.getElementById("player2");
var lienzo2 = p2.getContext("2d");
var v=document.getElementById("vs");
var s1=document.getElementById("puntaje1");
var s2=document.getElementById("puntaje2");
var pi=document.getElementById("piedra");
var pa=document.getElementById("papel");
var ti=document.getElementById("tijera");
var r=document.getElementById("resultado");

var stone1ruta = "/static/PPT/IMAGENES/PIEDRA1.png";
var stone1 = new Image();
stone1.src = stone1ruta;

var stone2ruta = "/static/PPT/IMAGENES/PIEDRA2.png";
var stone2 = new Image();
stone2.src = stone2ruta;

var paper1ruta = "/static/PPT/IMAGENES/PAPEL1.png";
var paper1 = new Image();
paper1.src = paper1ruta;

var paper2ruta = "/static/PPT/IMAGENES/PAPEL2.png";
var paper2 = new Image();
paper2.src = paper2ruta;

var scissors1ruta = "/static/PPT/IMAGENES/TIJERA1.png";
var scissors1 = new Image();
scissors1.src = scissors1ruta;

var scissors2ruta = "/static/PPT/IMAGENES/TIJERA2.png";
var scissors2 = new Image();
scissors2.src = scissors2ruta;


pi.addEventListener("click",playpiedra);
pa.addEventListener("click",playpapel);
ti.addEventListener("click",playtijera);

var contador1 =0
var contador2 =0

function playpiedra()
{
    valor= Math.floor(Math.random()*3)
    lienzo1.drawImage(stone1,0,0);
    v.innerHTML="VS"
    if (valor==0)
    {
        dibujo=stone2
        r.innerHTML="EMPATE"
    }
    else if (valor==1)
    {
        dibujo=paper2
        r.innerHTML="DERROTA"
        contador2+=1
    }
    else
    {
        dibujo=scissors2
        r.innerHTML="VICTORIA"
        contador1+=1
    }
    lienzo2.drawImage(dibujo,0,0);

    s1.innerHTML="SCORE "+contador1
    s2.innerHTML="SCORE "+contador2


}

function playpapel()
{
    valor= Math.floor(Math.random()*3)
    lienzo1.drawImage(paper1,0,0);
    v.innerHTML="VS"
    if (valor==0)
    {
        dibujo=stone2
        r.innerHTML="VICTORIA"
        contador1+=1
    }
    else if (valor==1)
    {
        dibujo=paper2
        r.innerHTML="EMPATE"
    }
    else
    {
        dibujo=scissors2
        r.innerHTML="DERROTA"
        contador2+=1
    }
    lienzo2.drawImage(dibujo,0,0);

    s1.innerHTML="SCORE "+contador1
    s2.innerHTML="SCORE "+contador2

}

function playtijera()
{
    valor= Math.floor(Math.random()*3)
    lienzo1.drawImage(scissors1,0,0);
    v.innerHTML="VS"
    if (valor==0)
    {
        dibujo=stone2
        r.innerHTML="DERROTA"
        contador2+=1
    }
    else if (valor==1)
    {
        dibujo=paper2
        r.innerHTML="VICTORIA"
        contador1+=1
    }
    else
    {
        dibujo=scissors2
        r.innerHTML="EMPATE"
    }    
    lienzo2.drawImage(dibujo,0,0);

    s1.innerHTML="SCORE "+contador1
    s2.innerHTML="SCORE "+contador2

}