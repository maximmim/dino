const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const dinoq = document.getElementById("dinoq");
const dinow = document.getElementById("dinow");

dino.style.display = "none"
setTimeout(dinoq.style.display = "block",1000);
setTimeout(dinoq.style.display = "none",1000);
setTimeout(dinow.style.display = "block",1000);
setTimeout(dinow.style.display = "none",1000);
setTimeout(dino.style.display = "block",1000);

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
    
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Жаль ти проиграл :(")
        document.location.replace('reset.html');
    }   
    
    
    
   
},10)    


