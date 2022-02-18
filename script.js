const dino = document.getElementById("dino");
const dinoan1 = document.getElementById("dinow");
const dinoan2 = document.getElementById("dinoh");
const cactus = document.getElementById("cactus");
const cactus1= document.getElementById("cactus1");
const dinodown = document.getElementById("dinodown")

const livee = document.getElementById("live")
const live2 = document.getElementById("live2")
const live3 = document.getElementById("live3")

const dont1 = document.getElementById("dont1")
const dont2 = document.getElementById("dont2")
const dont3 = document.getElementById("dont3")

const daac = document.getElementById("dac")

let live = 3;

let i = 1;

function jump() {
    if(dino.classList != "jump" && dinodown.classList != "jump"){
        dino.classList.add("jump")
        dinoan1.classList.add("jump")
        dinoan2.classList.add("jump")
        dinodown.classList.add("jump")
        dino.style.display = "block"
        dinodown.style.display = "none"
        cactus.style.top = "110px"
        i = i+1;
        $('#fe').text(i)
    }
    setTimeout(function(){
        dino.classList.remove("jump")
        dinodown.classList.remove("jump")
    }, 700)

}
let downn = false;
function down() {
    dino.style.display = "none"
    dinodown.style.display = "block"
    cactus.style.top = "125px"
    setTimeout(downof, 1000)
}
function downof() {
    dino.style.display = "block"
    dinodown.style.display = "none"
    cactus.style.top = "110px"
}
document.addEventListener('keydown', function(event){
    jump();
});
document.addEventListener("keydown" ,  function(event) {

})
let isAlite = setInterval (function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    let c = parseInt(window.getComputedStyle(daac).getPropertyValue("left"))

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) 
    { alert("ТИ ПРОИГРАЛИ")
      document.location.replace('reset.html');
    }
 
    if (c < 50 && c > 0 && dinoTop >= 140) 
    { alert("ТИ ПРОИГРАЛИ")
      document.location.replace('reset.html');
    }
 
},10)
function aw() {
livee.classList.add("love")
}


//if (live == 2) {
//live1.style.display = "none"
//dont1.style.display = "block"
//}

//if (live == 1) {
//live2.style.display = "none"
//dont2.style.display = "block"
//}

//if (live == 0) {
//live3.style.display = "none"
//dont3.style.display = "block"
//alert("ТИ ПРОИГРАЛ")
//document.location.replace('reset.html');
//}

