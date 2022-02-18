const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const cactus1= document.getElementById("cactus1");
const dinodown = document.getElementById("dinodown")


let i = 1;

function jump() {
    if(dino.classList != "jump" && dinodown.classList != "jump"){
        dino.classList.add("jump")
        dinodown.classList.add("jump")

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
    let cactusLeft1 = parseInt(window.getComputedStyle(cactus1).getPropertyValue("left"))
        if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Жаль ти проиграл :(")
        document.location.replace('reset.html');
    }   
   




},10)