

if (da == true) {
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) 
    { 
        
     //console.log("-1 Жизнь")   
     //alert("ТИ ПРОГРАВ, СПІВЧУВАЮ");
     //document.location.replace('reset.html');
     
     
     live = live - 1;
    }
    if (cactusLeft < 50 && cactusLeft > 0 && demonTop >= 140) 
    { 
        
     //console.log("-1 Жизнь")   
     //alert("ТИ ПРОГРАВ, СПІВЧУВАЮ");
     //document.location.replace('reset.html');
     
     
     live = live - 1;
    }
  }
  
  //метод проверки жизней 1
  if (live < 2) {
  
  document.getElementById("heal").style.display = "none"
  document.getElementById("dheal").style.display = "block"
  
  
  
  
  
  //$("#www").text(live)
  da = false
  setTimeout(dawd,900)
  setTimeout(daa,3000)
  }
  function dawd() {
      document.getElementById("heal").style.display = "block"
  document.getElementById("dheal").style.display = "none"
  }
  //метод проверки жизек а потом смерть
  if (live < 1) {
      da = false
      setTimeout(dawd, 900)
      setTimeout(daa,4000)
      $("#www").text(live)
      
  document.getElementById("heal").style.display = "none"
  document.getElementById("dheal").style.display = "block"
      
  
  }
  
  
  
  
  if (i == 1000) {
      dn()
  }
  if (live < 0) {
  //document.getElementById("heal").style.display = "none"
  //document.getElementById("dheal").style.display = "block"
  //document.getElementById("reset").style.display = "block"
  //document.getElementById("gemv").style.display = "block"
  //document.getElementById("dinowath").style.display = "block"
  
  //dino.style.display = "none"
  dino.classList.remove("jump")
  //document.getElementById("jum").style.display = "none"
  //document.getElementById("sit").style.display = "none"
  //let cactusLefta = cactus.style.left;
  //cactus.style.left = cactusLefta;
  //cactus.classList.remove("cactusmov")
  //document.getElementById("f").style.display = "none"
  //doc.classList.remove("doc")
  
  //document.getElementById("live").style.display = "none"
  //document.getElementById("af").style.display = "none"
  //document.getElementById("fe").style.display = "none"
  
  
  
  //document.getElementById("dad").style.display = "none"
  //document.getElementById("www").style.display = "none"
  
  
  
  
  
  
  
  
  
  //alert("ТИ ПРОИГРАЛ")
  document.location.replace('reset.html');
  //$("#www").text(live)
  }