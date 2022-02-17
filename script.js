const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const cactus1= document.getElementById("cactus1");


let i = 1;

function jump() {
    if(dino.classList != "jump"){
        dino.classList.add("jump")
        dinoq.classList.add("jump")
        dinow.classList.add("jump")

        i = i+1;
        $('#fe').text(i)
    }
    setTimeout(function(){
        dino.classList.remove("jump")
    }, 700)
}

document.addEventListener("keydown" ,  function(event) {
jump();
})
let isAlite = setInterval (function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    let cactusLeft1 = parseInt(window.getComputedStyle(cactus1).getPropertyValue("left"))
        if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Жаль ти проиграл :(")
        document.location.replace('reset.html');
    }   
   




},10)