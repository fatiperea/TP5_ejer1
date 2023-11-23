const iniciaJuego=() =>{

   const aleatorio= Math.floor(Math.random() * 100 + 1);
   console.log(aleatorio);
}

const btnJuego = document.getElementById("juego");
console.log(btnJuego);

btnJuego.addEventListener("click",iniciaJuego);