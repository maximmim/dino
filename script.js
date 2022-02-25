const dino = document.getElementById("dino");
const dinoan1 = document.getElementById("dinow");
const dinoan2 = document.getElementById("dinoh");
const cactus = document.getElementById("cactus");
const doc = document.getElementById("dac");
const dinodown = document.getElementById("dinodown")
let ii = 1;

localStorage.setItem('dat', 1);
let daw = localStorage.getItem('dat');
const livee = document.getElementById("live")
const live2 = document.getElementById("live2")
const live3 = document.getElementById("live3")

const dont1 = document.getElementById("dont1")
const dont2 = document.getElementById("dont2")
const dont3 = document.getElementById("dont3")

const tg = document.getElementById("tg")

console.log(localStorage.getItem('dat'))
let live = 3;

let i = 1;
function updatea() {

}
setInterval(updatea, 100)   
    

$("#www").text(live)
function jump() {
    if(dino.classList != "jump" && dinodown.classList != "jump"){
        dino.classList.add("jump");
        i++;    
        $("#fs").text(localStorage.dat);
        localStorage.dat++;
        $('#fe').text(i);
        console.log(localStorage.dat);
        dinoan1.classList.add("jump");
        dinoan2.classList.add("jump");
        dinodown.classList.add("jump");
        dino.style.display = "block";
        dinodown.style.display = "none";
        cactus.style.top = "110px";

    }
    setTimeout(function(){
        dino.classList.remove("jump")
        dinodown.classList.remove("jump")
    }, 700)

}
let da = true;
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
  { 
      
   console.log("-1 Жизнь")   
   //alert("ТИ ПРОГРАВ, СПІВЧУВАЮ");
   //document.location.replace('reset.html');
   live = live - 1;
  }
}

if (live == 2) {
$("#www").text(live)
da = false
setTimeout(daa,3000)
}

if (live == 1) {
    da = false
    setTimeout(daa,4000)
    $("#www").text(live)
}
if (live == 0) {

//alert("ТИ ПРОИГРАЛ")
document.location.replace('reset.html');
//$("#www").text(live)
}
function daa() {
da = true
}
//function logs() {
//    da = true;
//    document.getElementById("log").style.display = "block";
//}
//setTimeout(logs, 3000)

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
da = false;
setTimeout(d,8000)
}
function d() {
    da = true;
}






