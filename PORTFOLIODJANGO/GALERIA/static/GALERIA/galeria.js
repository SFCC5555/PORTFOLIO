var b1= document.querySelector("button")
var a1= document.getElementById("a");

b1.addEventListener("click", () => {
    a1.setAttribute("src", "/static/GALERIA/AUDIO/THANKYOU.mp3")
    a1.play()
})

function audio()
{
    a1.setAttribute("src", "/static/GALERIA/AUDIO/THANKYOU.mp3")
    a1.play()
}