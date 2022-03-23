var c = document.getElementById("colordepincel");
var b = document.getElementById("borrador");
var d = document.getElementById("areaDeDibujo");
var g = document.getElementById("gracias");
var lienzo = d.getContext("2d");
let mouse=false;
let eraser=false;
function dibujarPunto(color,ancho, xinicial, yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle= color;
    lienzo.lineWidth = ancho;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
    
}

d.addEventListener("mousemove", dibujoConMouse);
d.addEventListener("mousedown", activarMouse);
d.addEventListener("mouseup", desactivarMouse);
b.addEventListener("click", activarBorrador);
c.addEventListener("click", activarColor);
document.addEventListener("keydown", mensajeSecreto);

function mensajeSecreto(eventosecreto)
{
    console.log(eventosecreto)
    if (eventosecreto.key=="s")
    {
        g.play()
    }
    
}

function activarBorrador()
{
    eraser=true;
}
function activarColor()
{
    eraser=false;
}
var xi;
var yi;
function activarMouse(e)
{
    mouse=true;
    xi = e.offsetX;
    yi = e.offsetY;
}

function desactivarMouse()
{
    mouse=false;

}

function dibujoConMouse(evento)
{
     
    if(mouse==true){
        if (eraser==false){
            var xf = evento.offsetX;
            var yf = evento.offsetY;
            dibujarPunto(c.value,2,xi,yi,xf,yf)
            xi=xf;
            yi=yf
        }
        if (eraser==true){
            var xf = evento.offsetX;
            var yf = evento.offsetY;
            dibujarPunto("white",30,xi,yi,xf,yf)
            xi=xf;
            yi=yf

        }

    }


} 

