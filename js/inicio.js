const cuerpo = document.querySelector(".cuerpo_inicio");
const frases = ["DESCUBRE TU FUTURO", "LOS CAMINOS ESTÁN EN TUS MANOS", "SE EL DUEÑO DE TU DESTINO", "TU NOMBRE"];
let cont = 0;

function crearObjeto() {
  const titulo = document.createElement("h2");
  titulo.className = "inicio";
  titulo.textContent = frases[cont];
  cuerpo.appendChild(titulo);
  cont = (cont + 1) % frases.length;
  titulo.style.transform = "scale(0)";

  setTimeout(() => {
    titulo.style.transform = "scale(1)";
    if (cont != 0) {
      setTimeout(() => {
        titulo.remove();
      }, 1000);
    }
  }, 1000);


  if (cont === 0) {
    clearInterval(interval);
  }
}
const interval = setInterval(crearObjeto, 2000);

const divs = document.querySelectorAll('div');

divs.forEach((div) => {
  div.style.opacity = 0; // Establece la opacidad inicial de cada div en 0
});

setTimeout(() => {
  divs.forEach((div) => {
    div.style.transition = 'opacity 1s'; // Agrega una transición de 1 segundo
    div.style.opacity = 1; // Establece la opacidad final de cada div en 1
  });
}, 10000);

const boton = document.querySelector(".boton1")
boton.addEventListener("click", function () {
  window.open("../inicio.html");
})

//Redimension
// Obtener la altura de la barra de herramientas del navegador móvil
let vh = window.innerHeight;
console.log(vh)
let vvh=window.visualViewport.height;
console.log(vvh)

const navBarHeight = window.screen.height - vvh;
document.body.style.height = (vh - navBarHeight) + 'px';
alert("vh "+vh+" vvh "+vvh+" nbh "+navBarHeight+" Y la altura final es de "+document.body.style.height)

