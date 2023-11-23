const iniciaJuego=() =>{

   const aleatorio= Math.floor(Math.random() * 100 + 1);
   console.log(aleatorio);
}

const recibeNumero= (e) => {
    e.preventDefault();
    const numIngresado=document.querySelector(".form-control").value;
    console.log(numIngresado);

    inputNumero.reset();

}

const comparaNumero=()=>{

}

const btnJuego = document.getElementById("juego");
console.log(btnJuego);

btnJuego.addEventListener("click",iniciaJuego);

const inputNumero= document.querySelector("form");
console.log(inputNumero);

inputNumero.addEventListener('submit',recibeNumero);