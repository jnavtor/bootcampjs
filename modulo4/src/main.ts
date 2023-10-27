const siguiente = ()=> {
const parrafoResultado = document.getElementById ("resultado");
if (parrafoResultado !== null && parrafoResultado !== undefined && parrafoResultado instanceof HTMLParagraphElement){
    let numeroActual = parseInt(parrafoResultado.innerText); 
   const resultado = `${numeroActual +1}`.padStart(2, "0");
   parrafoResultado.innerText = resultado
}
}
const botonsiguiente = document.getElementById ("botonsiguiente");
if (botonsiguiente !== null && botonsiguiente !== undefined && botonsiguiente instanceof HTMLButtonElement){
    botonsiguiente.addEventListener("click",siguiente)
}
const anterior = ()=> {
const parrafoResultado = document.getElementById ("resultado");
    if (parrafoResultado !== null && parrafoResultado !== undefined && parrafoResultado instanceof HTMLParagraphElement){
        let numeroActual = parseInt(parrafoResultado.innerText); 
       const resultado = `${numeroActual -1}`.padStart(2, "0");
       parrafoResultado.innerText = resultado
    }
    }
const botonanterior = document.getElementById ("botonanterior");
    if (botonanterior !== null && botonanterior !== undefined && botonanterior instanceof HTMLButtonElement){
        botonanterior.addEventListener("click",anterior)
    }
    //reset
const reset = ()=> {
const parrafoResultado = document.getElementById ("resultado");
        if (parrafoResultado !== null && parrafoResultado !== undefined && parrafoResultado instanceof HTMLParagraphElement){
           parrafoResultado.innerText = "0";
        }
        }
const botonreset = document.getElementById ("botonreset");
        if (botonreset !== null && botonreset!== undefined && botonreset instanceof HTMLButtonElement){
            botonreset.addEventListener("click",reset)
        }
        //introducirvalor
const botonintroducirvalor = document.getElementById("introducirvalor");
const introducirvalor = () => {
    const inputcajatexto = document.getElementById("cajatexto");
    if (inputcajatexto !== null && inputcajatexto !== undefined && inputcajatexto instanceof HTMLInputElement){
        let valorcajatexto = inputcajatexto.value;
        const parrafoResultado = document.getElementById("resultado")
        if (parrafoResultado !== null && parrafoResultado !== undefined && parrafoResultado instanceof HTMLParagraphElement){
            parrafoResultado.innerText = valorcajatexto.padStart(2, "0");
        }
    }
}
if (botonintroducirvalor !== null && botonintroducirvalor !== undefined && botonintroducirvalor instanceof HTMLButtonElement){
    botonintroducirvalor.addEventListener("click",introducirvalor)
}


