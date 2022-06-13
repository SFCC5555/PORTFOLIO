var s=document.getElementById("start");
var e=document.getElementById("espacio");
var p=document.getElementById("puntaje");
var i=document.getElementById("inicio");
var v=document.getElementById("vida");
var g=document.getElementById("game");

var r=30; //radio de las "dianas"-rayos
var a=0; //angulo de trazo
var z=0; // contador de tiros acertados
var q=10; // contador de escudo

//document.addEventListener("keydown",prueba);
                 
function prueba()
{
    p.innerHTML="SCORE   "+z;
    v.innerHTML="SHIELD   "+q;
    s.innerHTML="RELOAD"
    g.innerHTML="GAME OVER"
}

function masuno(x,y)
{
    c.fillStyle="teal";
    c.font = "lighter 25px Pixel Digivolve";
    c.textBaseline="bottom";
    c.textAlign="left";
    c.fillText("+1",x+25,y-25);
    setTimeout(()=>{c.clearRect(x+25,y-42,22,17)},150);
}

s.addEventListener("click",startgame);

function impacto(x,y)
{
    c.fillStyle="red";
    //c.font = "lighter italic 115px Pixel Digivolve";
    c.font = "lighter 126px Pixel Digivolve";
    c.textBaseline="middle";
    c.textAlign="center";
    c.fillText("*",x+11.5,y-4);
    c.font = "lighter 30px Pixel Digivolve";
    c.strokeText("IMPACTO", 600,50);
    intervalo=setInterval(itermitente,350);
    interCount=0

    function itermitente()
    {
        interCount++
        //console.log(interCount)

        if (interCount%2==1)
        {
            c.clearRect(530,44,136,22);
        }
        
        else
        {
            c.strokeStyle="red";
            c.strokeText("IMPACTO", 600,50);
        }

        if (interCount==3)
        {
            clearInterval(intervalo)
        }
    }
}

function startgame()
{
    q=10;
    i.innerHTML="";
    p.innerHTML="SCORE   ";
    v.innerHTML="SHIELD   "+q;
    e.innerHTML= "<canvas id='lienzo' width='1200' height='600' style='background-color: rgba(6, 6, 15, 0.986);'></canvas>";
    l=document.getElementById("lienzo");
    c= l.getContext("2d");    
    var x=Math.random()*(1170-30)+30;
    var y=Math.random()*(570-30)+30;
    
    function disparo(evento)
    {
        if (parseInt(evento.layerX)<=(x+30) & parseInt(evento.layerX)>=(x-30) & parseInt(evento.layerY)<=y+30 & parseInt(evento.layerY)>=y-30)
        {
            masuno(x,y);
            z++;
            a=0;
            r=30;
            x=Math.random()*(1170-30)+30;
            y=Math.random()*(570-30)+30;
            p.innerHTML="SCORE   "+z;
            //console.log(evento);
            
            if (z%10==0)
            {
                dibujar()
            }
        }
    }
    
    dibujar()   
    
    function dibujar(color)
    {
        color="#FFEBEE"
        a++;
        
        if (a%360==0)
        {
            r-=7
        }
        
        if (r==23)
        {
            color="#FFCDD2";
        }
        
        if (r==16)
        {
            color="#EF9A9A"
        }
        
        if (r==9)
        {
            color="red"
        }
        
        t=(a*Math.PI)/180;
        c.beginPath();
        c.strokeStyle = color;
        c.moveTo(x+r*Math.cos(t),y+r*Math.sin(t));
        c.lineTo((x+r*Math.cos(t))+3,(y+r*Math.sin(t))+3);
        c.stroke();
        c.closePath();
        
        if (a<1430)
        {
            setTimeout(dibujar,1);
            document.addEventListener("click",disparo)
        }     
        
        else{
            
            if (q!=0)
            {
                q--;
                a=0;
                r=30;
                setTimeout(impacto(x,y),500)
                x=Math.random()*(1170-30)+30;
                y=Math.random()*(570-30)+30;
                v.innerHTML="SHIELD   "+q;
                dibujar()
            }            
            
            else
            {
                location. reload()
            }
        }
    }
}