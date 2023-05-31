const cuadro = document.querySelectorAll(".cuadrado");
const tiempofaltante = document.querySelector("#tiempo");
let puntaje = document.getElementById("puntaje"); 

let resultado = 0;
let tiempoactual = tiempofaltante.textContent;

function cuadroazar() {
  cuadro.forEach (nombredeclase => { 
    nombredeclase.classlist.remove("topo");
  });

let posicionalazar = cuadro[Math.floor(Math.random() * 9)];
posicionalazar.classList.add("topo");


posiciontopo= posicionalazar.id;
  }

  cuadro.forEach((identificador) => {
    if(identificador.id === posiciontopo) {
      resultado = resultado + 1;
      puntaje.textContent= resultado;
      posicionalazar = null
    }
  }); 

  function movertopo (){
    tiempotopo = setInterval(cuadroazar, 700)
  }
movertopo();

function cuentaregresiva (){
   tiempoactual --;
   tiempofaltante.textContent = tiempoactual;
   if (tiempoactual es === 0){
   clearInterval(idtiempo);
   clearInterval(tiempotopo);
   alert ("se acabó el tiempo, tu puntaje es" + resultado + "topos atrapados")
}
}
