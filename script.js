const dino = document.getElementById("dino");
const dinoan1 = document.getElementById("dinow");
const dinoan2 = document.getElementById("dinoh");
const cactus = document.getElementById("cactus");
const doc = document.getElementById("dac");
const dinodown = document.getElementById("dinodown")

const livee = document.getElementById("live")
const live2 = document.getElementById("live2")
const live3 = document.getElementById("live3")

const dont1 = document.getElementById("dont1")
const dont2 = document.getElementById("dont2")
const dont3 = document.getElementById("dont3")

const tg = document.getElementById("tg")

let live = 3;

let i = 1;

function jump() {
    if(dino.classList != "jump" && dinodown.classList != "jump"){
        dino.classList.add("jump")
        i = i+1;
        $('#fe').text(i)
        dinoan1.classList.add("jump")
        dinoan2.classList.add("jump")
        dinodown.classList.add("jump")
        dino.style.display = "block"
        dinodown.style.display = "none"
        cactus.style.top = "110px"

    }
    setTimeout(function(){
        dino.classList.remove("jump")
        dinodown.classList.remove("jump")
    }, 700)

}
let da = false;
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

if (da == true) {
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) 
    { alert("ТИ ПРОИГРАЛИ")
      document.location.replace('reset.html');
    }
}

function logs() {
    da = true;
    document.getElementById("qqe").style.display = "none";
    document.getElementById("log").style.display = "block";
}
setTimeout(logs, 12000)

  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
  window.onload = function () {
    document.body.classList.add('loaded');
  }
},10)
function toe() {
    dino.classList.remove("jump")
    document.getElementById("jum").style.display = "none"
    document.getElementById("sit").style.display = "none"
    cactus.classList.remove("cactusmov")
    document.getElementById("f").style.display = "none"
    doc.classList.remove("doc")
    document.getElementById("ff").style.display = "block"
    

}
function teo() {
    dino.classList.add("jump")
    document.getElementById("jum").style.display = "block"
    document.getElementById("sit").style.display = "block"
    cactus.classList.add("cactusmov")
    document.getElementById("f").style.display = "block"
    doc.classList.add("doc")
    document.getElementById("ff").style.display = "none"
}
function aw() {
livee.classList.add("love");
}
toe();

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

