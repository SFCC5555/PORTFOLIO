document.write ("version:beta1.1");

var p1=document.getElementById("playerone");
var p2=document.getElementById("playertwo");
var t=document.getElementById("time");
var s=document.getElementById("score");
var x=document.getElementById("sonido");
//var a=document.getElementById("audio");

s.innerHTML= "SCORE";
t.innerHTML= "";
p1.innerHTML= "PLAYER 1";
p2.innerHTML= "PLAYER 2";

//a.play
p1.addEventListener("click",startgame);
p2.addEventListener("click",notcodedyetp2);
x.addEventListener("click",notsoundyet);

function soundoff()
{
    x.innerHTML= "SOUND: OFF"
}

function notsoundyet()
{
    x.innerHTML= "SOUND: OFF <br> <p style='color: red; font-size: 12px;'> no sound yet </p>";
    setTimeout(soundoff,1000)
}

function notcodedyetp2()
{
    p2.innerHTML= "Not Coded Yet";
    setTimeout(() => {p2.innerHTML= "PLAYER 2"},500)
}

function startgame(evento)
{
    p1.innerHTML= "";
    p2.innerHTML= "";
    intervalo=setInterval(tiempo,500);
    setTimeout(p1turn,2500);
}


function p1turn()
{
    p1.innerHTML= "YOUR<br>TURN ";
}

function p2turn()
{
    p2.innerHTML= "YOUR<br>TURN ";
}



let segundos=4

function tiempo()
{
    p1.removeEventListener("click",startgame);
    p2.removeEventListener("click",notcodedyetp2);
    segundos--
    t.innerHTML= segundos;
    
    if (segundos==0)
    {
        t.innerHTML= "GO!";
    }
    
    if (segundos==-1)
    {
        t.innerHTML= "<";
        clearInterval(intervalo);
        segundos=4
        setTimeout(game,50);
    }

}
contador=0
score=0
function game()
{
    contador++
    if (contador%2!=0)
    {
        score++
        usuario=(prompt("WRITE A NUMBER [JUST PRESS ENTER FOR PUN!]"));
    }
    
    longitud=String(contador).length

    if (contador%7==0 || String(contador).indexOf(7)==longitud-1)
    {
        if (contador%2==0)
        {
            setTimeout(p1turn,0);;
            p2.innerHTML="PUN!";
            t.innerHTML="<"
            s.innerHTML="SCORE "+score;
            setTimeout(game,500);
        }

        else
        {
            if (usuario=="")
            {
                score+=6
                p1.innerHTML= "PUN!";
                setTimeout(p2turn,0)
                t.innerHTML=">";
                s.innerHTML="SCORE "+score;
                setTimeout(game,1250);
            }
            
            else
            {
                p1.innerHTML= "LOSER";
                p2.innerHTML="WINNER";
                t.innerHTML="GAME OVER";
                setTimeout(() =>{t.innerHTML="<p style='font-size: 35px; font-weight:lighter; border-style: solid; border-radius: 25px; border-color: #00FF00; border-width: 5px; margin: 0px; padding: 30px; cursor:pointer;'>RELOAD</p>"; t.addEventListener("click",() =>{location. reload()});},3000);
                s.innerHTML="SCORE "+(score-1);
            }

        }
    } 
    else
    {
        if (contador%2==0)
        {
            setTimeout(p1turn,0);;
            p2.innerHTML=contador;
            t.innerHTML="<"
            s.innerHTML="SCORE "+score;
            setTimeout(game,500);
        }
        
        else
        {
            if (parseInt(usuario)==contador)
            {
                p1.innerHTML=contador;
                setTimeout(p2turn,0)
                t.innerHTML=">";
                s.innerHTML="SCORE "+score;
                setTimeout(game,1250);
            }
            else
            {
                p1.innerHTML="LOSER";
                p2.innerHTML="WINNER";
                t.innerHTML="GAME OVER";
                setTimeout(() =>{t.innerHTML="<p style='font-size: 35px; font-weight:lighter; border-style: solid; border-radius: 25px; border-color: #00FF00; border-width: 5px; margin: 0px; padding: 30px; cursor:pointer;'>RELOAD</p>"; t.addEventListener("click",() =>{location. reload()});},3000);
                s.innerHTML="SCORE "+(score-1);
            }

        }
    }
}    
