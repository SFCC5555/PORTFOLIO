document.write ("holis");

var p1=document.getElementById("playerone");
var p2=document.getElementById("playertwo");
var t=document.getElementById("time");
var s=document.getElementById("score");

s.innerHTML= "SCORE";
t.innerHTML= "";
p1.innerHTML= "PLAYER 1";
p2.innerHTML= "PLAYER 2";

p1.addEventListener("click",startgame);

function startgame()
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
        p1.removeEventListener("click",startgame);
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
        usuario=(prompt("YOUR TURN [ENTER FOR PUN!]"));
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
                s.innerHTML="SCORE "+(score-1);
            }

        }
    }
}    
    
    
    
    
    
    
    
    
    
    
    
    
    //if (usuario=="")
    //{
    //    if (contador%7==0)
    //    {
    //        p2.innerHTML="";
    //        p1.innerHTML= "PUN!";
    //        setTimeout(player2,1500);
    //        s.innerHTML= "SCORE "+score;
    //        intervalo=setInterval(tiempo,500);
    //    }
    //    else
    //    {
    //        p1.innerHTML= "WRONG";
    //        t.innerHTML= "YOU LOSE";
    //        s.innerHTML= "SCORE "+score;
    //    }
    //
    //}
    //else 
    //{
    //  if (contador==parseInt(usuario))
    //    {
    //        p2.innerHTML="";
    //        p1.innerHTML= contador;
    //        setTimeout(player2,1500);
    //        s.innerHTML= "SCORE "+score;
    //        intervalo=setInterval(tiempo,500);

    //    }
    //    else
    //    {
    //        t.innerHTML= "YOU LOSE";
    //        p1.innerHTML= "WRONG";
    //    }
    //}

//}




//function player2()
//{
//    p2.innerHTML= contador+1;
//    setTimeout(player1,500);
//
//}

//function player1()
//{
//    p1.innerHTML="";
//}