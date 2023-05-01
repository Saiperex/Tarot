const miDiv = document.querySelector(".boton1");
const miDiv2 = document.querySelector(".boton2");
const miDiv3 = document.querySelector(".boton3");
miDiv.addEventListener("mouseover", function() {
    miDiv2.style="transform:translate(-50%, 0) rotate(-30deg)"
    miDiv3.style="transform:translate(50%, 0) rotate(30deg)"
  });
  
  miDiv.addEventListener("mouseout", function() {
    miDiv2.style="transform: skew(0deg)"
    miDiv3.style="transform: skew(0deg)"
  });