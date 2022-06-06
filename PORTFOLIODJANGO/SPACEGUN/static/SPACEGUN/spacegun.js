var s=document.getElementById("start");
var e=document.getElementById("espacio");

s.addEventListener("click",startgame);

var x=50;
var y=50;
var r=400;
var a=0;


function startgame()
{
    s.innerHTML="GO!"
    e.innerHTML= "<canvas id='lienzo' width='1350' height='2000' style='background-color: red;'></canvas>";
    l=document.getElementById("lienzo");
    c= l.getContext("2d");
    
    dibujar()
        
    function dibujar()

    {
        //x++;
        a++
        t=(a*Math.PI)/180;
        //y=(1000+Math.sqrt(1000000-4*(x*x-800*x+(41000-(r*r)))))/2;



        c.beginPath();
        c.strokeStyle = "black";
        c.moveTo(500+x*Math.cos(t),500+y*Math.sin(t));
        c.lineTo((500+x*Math.cos(t))+3,(500+y*Math.sin(t))+3)
        c.stroke();
        c.closePath();
        console.log(x+"--"+y);
        setTimeout(dibujar,10);
        

    }

    

}