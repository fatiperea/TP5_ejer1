const iniciaJuego=() =>{

   const aleatorio= Math.floor(Math.random() * 100 + 1);
   console.log("aleatorio: "+aleatorio);
   return aleatorio;
}

const recibeNumero= (e) => {
    e.preventDefault();
    const numIngresado=parseInt(document.querySelector(".form-control").value);
    console.log("ingresado "+numIngresado);
    console.log("igualdad estricta: ing vs mag",numIngresado===magico);

    if(numIngresado===magico) alert("ADIVINASTE EL NUMERO MAGICO!!");
    else if(numIngresado>magico) alert("NO ADIVINASTE...Tu numero es mayor que el numero magico");
    else if(numIngresado<magico) alert("NO ADIVINASTE...Tu numero es menor que el numero magico"); 

    inputNumero.reset();

}

const btnJuego = document.getElementById("juego");
//console.log(btnJuego);

 btnJuego.addEventListener("click",iniciaJuego); 
const magico = parseInt(iniciaJuego());
console.log("guardo magico",magico)
const inputNumero= document.querySelector("form");
//console.log(inputNumero);

inputNumero.addEventListener('submit',recibeNumero);
//const recibido=recibeNumero();

