//ej1

const caja = document.querySelector(".caja");
const boton = document.getElementById("boton")
function cambiarColor(color) {
    caja.style.backgroundColor = color;
}

boton.addEventListener('click', () => {
    if(caja.style.backgroundColor === "gray"){
        cambiarColor('lightblue')
    }
    else if (caja.style.backgroundColor === "lightblue"){
        cambiarColor('red')
    }
    else{
        cambiarColor('gray')
    }
})

//ej2

const texto2 = document.getElementById("texto2")
const input2 = document.getElementById("input2")
const resetButton = document.getElementById('resetButton');

input2.addEventListener('input', function() {
    texto2.textContent = input2.value;
});
resetButton.addEventListener('click', function() {
    input2.value = "";
    texto2.textContent = "";
});


//ej3

const estatura3 = document.getElementById("estatura")
const peso3 = document.getElementById("peso")
const output3 = document.getElementById("output3")
const button3 = document.getElementById("button3")

let estatura = 0
let peso = 0
let indice = 0

button3.addEventListener('click', function(estatura, peso) {
    estatura = estatura3.value
    peso = peso3.value

    indice = peso/Math.sqrt(estatura/100)
    output3.value = indice
})

//ej4

const pesosARS = document.getElementById("pesoArgentino")
const dolarUSD = document.getElementById("dolarUSD")

pesosARS.addEventListener("input", function(){
    let pesos = pesosARS.value;
    dolarUSD.textContent = pesos / 500;
})
