// EJERCICIO 1
function ej1() {
    let num = prompt("Ingrese un numero entre 1 y 100");
    if(num<1 || num > 100){
        alert ("El número no está en el rango")
        return;
    }
    for(let i = num; i >= 1; i--){
        console.log(i)
    }
}

//ej1();

// EJERCICIO 2
function ej2(){
    let num = prompt("Ingrese un numero entre 1 y 10");
    if(num<1 || num > 10){
        alert ("El número no está en el rango")
        return;
    }
    for(let i = 1; i <= 10; i++){
        let resultado = num*i;
        console.log(`${i} x ${num} = ${resultado}`);
    }
}

//ej2();

// EJERCICIO 3
function ej3(){
    let cuenta = 0;
    let num = 1;
    while(num != 0){
        num = parseInt(prompt("Ingrese un numero para agregar a la cuenta, o un 0 para finalizar."));
        cuenta += num;
    }
    console.log(cuenta);
}

//ej3();

// EJERCICIO 4
function ej4(){
    let cuenta = 0;
    let num = 1;
    do{
        num = parseInt(prompt("Ingrese un numero para agregar a la cuenta, o un 0 para finalizar."));
        cuenta += num;
    }while(num != 0);
    console.log(cuenta);
}

//ej4();

// EJERCICIO 5
function ej5() {
    let numeroSecreto = 12;
    let numero = 0;
    let intentos = 0;
    while(numero != numeroSecreto){
        numero = parseInt(prompt("Ingrese un número del 1 al 100"));
        if(numero < numeroSecreto){
            console.log("El numero ingresado es menor que el número secreto");
        }
        else if(numero > numeroSecreto){
            console.log("El numero ingresado es mayor que el número secreto");
        }
        intentos++;
    }
    console.log(`Acertaste!, el número secreto era ${numeroSecreto}, te tomó ${intentos} intentos`);
}

//ej5();

// EJERCICIO 6
function ej6(){
    let num = parseInt(prompt("Ingrese un número entero"));

    console.log(`Divisores de ${num}:`);

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(`${i}`);
        }
    }
}

//ej6();

// EJERCICIO 7
function ej7(){
    let colores = ["Rojo", "Amarillo", "Verde", "Violeta", "Azul", "Rosa", "Celeste"];

    for(let color of colores){
        console.log(color);
    }
}

//ej7();

// EJERCICIO 8
function ej8(){
    let numeros = [3, 5, 9, 10, 14, 20];

    for(numero of numeros){
        let doble = numero*2;
        console.log(`El número es ${numero} y su doble es ${doble}`);
    }
}

//ej8();

// EJERCICIO 9
const familia = [
    {nombre: 'Juan',
    apellidos:'Rodríguez',
    integrante: 'Padre',
    edad: 53},
    {nombre: 'Claudia',
    apellidos:'Chun',
    integrante: 'Madre',
    edad: 50},
    {nombre: 'Francisco',
    apellidos:'Rodríguez',
    integrante: '2do Hijo',
    edad: 16},
    {nombre: 'Marcos',
    apellidos:'Rodríguez',
    integrante: '1er Hijo',
    edad: 20}
]

function ej9(){
    for(integrante of familia){
        console.log(`Hola soy ${integrante['nombre']} ${integrante['apellidos']} (${integrante['integrante']}), tengo ${integrante['edad']} años`)
    }
}
//ej9();

// EJERCICIO 10
const persona = {
    nombre: 'Marcos',
    apellido: 'Rodríguez',
    mascota: true,
    haceDeporte: true,
    nacionalidad: 'Argentino'
}

function ej10(){
    for(let keys in persona){
        console.log(`${keys}`)
    }
}
//ej10();

// EJERCICIO 11
function ej11(){
    for(let keys in persona){
        console.log(`${persona[keys]}`)
    }
}
//ej11();

// EJERCICIO 12
function ej12(){
    let cuentaPar = 0;
    let cuentaImpar = 0;
    let num = 1;
    while(num != 0){
        num = parseInt(prompt("Ingrese un numero para agregar a la cuenta, o un 0 para finalizar."));
        if(num%2===0){
            cuentaPar += num;
        }
        else{
            cuentaImpar += num;
        }
    }
    console.log(`Pares: ${cuentaPar}`);
    console.log(`Pares: ${cuentaImpar}`);
}
//ej12();

// EJERCICIO 13

function ej13(){
    let arrayNumeros = [1,20,3,4,5,6,7,8,9,10];
    let numeroMayor = 0;
    
    for (let i = 0; i <= arrayNumeros.length; i++){
        if(i > numeroMayor){
            numeroMayor=arrayNumeros[i];
        }
    }
    console.log("El numero mas grande del array es: " + numeroMayor);
}
//ej13();