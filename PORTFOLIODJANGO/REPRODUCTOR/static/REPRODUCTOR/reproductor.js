var p= document.getElementById("paranoid");
var h= document.getElementById("happy");
var b= document.getElementById("blue");
var x= document.getElementById("play")

var c= document.getElementById("cancion");

var pausap=true
var pausab=true
var pausan=true

p.setAttribute("src", "/static/REPRODUCTOR/SONGS/paranoid.mp3")
b.setAttribute("src", "/static/REPRODUCTOR/SONGS/weezer-mr-blue-sky.mp3")
h.setAttribute("src", "/static/REPRODUCTOR/SONGS/weezer-happy-together.mp3")

function reproducir()
{
    if (pausap==true)
    {
        p.play()
        pausap=false
        x.innerHTML="PAUSE"
    }
    else if (pausap==false)

    {
        p.pause()
        pausap=true
        x.innerHTML="PLAY"
    }
    h.pause()
    h.currentTime=0;
    b.pause()
    b.currentTime=0;
    c.innerHTML="Paranoid"

}

function next()
{
    b.play()
    p.pause()
    p.currentTime=0;
    h.pause()
    h.currentTime=0;
    c.innerHTML="Mr. Blue Sky"
    pausap=true
    x.innerHTML="PAUSE"
}

function back()
{
    h.play()
    p.pause()
    p.currentTime=0;
    b.pause()
    b.currentTime=0;
    c.innerHTML="Happy Together"
    pausap=true
    x.innerHTML="PAUSE"
}