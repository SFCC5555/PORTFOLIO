class Pokemon
{
    constructor(nombre,tipo,nivel,sexo,ataque)
    {
        this.imagen = new Image();
        this.nombre = nombre;
        this.tipo = tipo;
        this.nivel = nivel;
        this.sexo = sexo;
        this.ataque = ataque;

        this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
        alert(this.nombre)
    }

    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>"+this.nombre+"</strong></br>");
        document.write("<strong>tipo:</strong> "+this.tipo+"</br>");// funciona <br/> y </br> wtf!
        document.write("<strong>nivel:</strong> "+this.nivel+"</br>");
        document.write("<strong>sexo:</strong> "+this.sexo+"<br/>");
        document.write("<strong>ataque:</strong> "+this.ataque+"<hr/>");
        document.write("</p>");
    }
}
