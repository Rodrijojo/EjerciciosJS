// Ejercicio 1
function numeroMayor(n1, n2){
    if(n1 > n2){
        console.log(n1 + " es mayor que " + n2);
    }
    else{
        console.log(n1 + " no es mayor que " + n2);
    }
}

//numeroMayor(10, 16);

// Ejercicio 2
function numerosIguales(n1, n2){
    if (n1 == n2) {
        console.log("Los dos valores son iguales");
    }
    else{
        console.log("No son iguales");
    }
}

//numerosIguales(10, 10)

// Ejercicio 3
function numeritos(n1, n2) {
    if (n1 === n2) {
        console.log('Los números son iguales');
    } else if (n1 > n2) {
        console.log(`${n1} es el número mayor`);
    } else {
        console.log(`${n2} es el número mayor`);
    }
}

// Ejercicio 4
function encontrarNumeroMasChico(num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
        return num1;
    } else if (num2 <= num1 && num2 <= num3) {
        return num2;
    } else {
        return num3;
    }
}

// Ejercicio 5
function personaMasAlta(persona1, persona2){
    let masAlto;
    let masViejo;
    if (persona1.altura > perosna2.altura) {
        masAlto=persona1.nombre;
    }
    else if (persona1.altura < perosna2.altura){
        masAlto=persona2.nombre;
    }
    else{
        masAlto = "Ambos";
    }
    if (persona1.edad > perosna2.edad) {
        masViejo=persona1.nombre;
    }
    else if (persona1.edad < perosna2.edad){
        masViejo=persona2.nombre;
    }
    else{
        masViejo = "Ambos";
    }

    alert("El más alto es " + masAlto + " y el mayor es " + masViejo)
}

// Ejercicio 6
function infoPersonal(){
    let nombre = prompt("Ingresa tu nombre: ");
    let edad = prompt("Ingresa tu edad: ");
    let altura = prompt("Ingresa tu altura (en cm): ");
    let vision = prompt("Ingresa tu nivel de visión (del 1 al 10): ");

    edad = parseInt(edad);
    altura = parseInt(altura);
    vision = parseInt(vision);
    if(vision > 10){
        alert ("Tu nivel de visión no puede ser superior a los 10.");
        return;
    }

    if(edad >= 18 && altura > 150 && vision >= 8){
        alert(nombre + " esta capacitado para manejar");
        }
    else{
        alert(nombre + " no esta capacitado para manejar");
    }
}

//infoPersonal();

// Ejercicio 7
function entrada() {
    let nombre = prompt("Ingrese su nombre:");
    let pase = prompt("Ingrese su tipo de pase (normal o vip):");
    pase = pase.toLowerCase();
    nombre = nombre.toLowerCase(); // Agregar paréntesis aquí
    if (nombre === "marcos" || pase === "vip") {
        alert("Bienvenido!");
        return;
    }
    
    if (pase !== "normal" && pase !== "vip") {
        alert('Debe ingresar un valor válido, reinicie la página');
        return;
    }

    let entrada = prompt("¿Posee entrada? (si o no):");
    entrada = entrada.toLowerCase();

    if (entrada !== "si" && entrada !== "no") {
        alert('Debe ingresar un valor válido, reinicie la página');
        return;
    }

    if (entrada === "si") {
        let confirmacion = window.confirm("¿Desea utilizarla?");
        if (confirmacion) {
            alert("Bienvenido!");
            return;
        }
        else{
            alert("No se le permitirá entrar");
        }
    }
    else {
        let comprarEntrada = window.confirm("¿Desea comprar?");
        if (comprarEntrada === false) {
            alert("¡Adiós!");
            return;
        } else {
            let dinero = prompt("Ingrese su dinero disponible: ");
            if (dinero >= 1000) {
                alert("Venta exitosa, ¡bienvenido!");
                return;
            } else {
                alert("Fondos insuficientes.");
                return;
            }
        }
    }
}


//entrada();

// Ejercicio 8
function adivinanza() {
    let numeroIncognita = 5;
    let intentos = 3;

    while (intentos > 0) {
        let numeroIngresado = parseInt(prompt("Ingrese un número:"));

        if (numeroIngresado === numeroIncognita) {
            alert("¡Ganaste!");
            return;
        } else if (numeroIngresado < numeroIncognita) {
            alert(`El número ingresado es mayor, te quedan ${intentos - 1} intentos.`);
        } else {
            alert(`El número ingresado es menor, te quedan ${intentos - 1} intentos.`);
        }

        intentos--;
    }

    alert("Ya no quedan intentos.");
}

// adivinanza();

// Ejercicio 9
function preguntarEdad(){
    let edad = prompt("¿cuantos años tenes?")

    edad = parseInt(edad);
    
    if (edad < 12) {
        alert("Eres un infante");
    } else if (edad <= 18) {
        alert("Eres un adolescente");
    } else if (edad <= 45) {
        alert("Eres un adulto");
    } else if (edad <= 100) {
        alert("Eres un anciano");
    } else {
        alert("¿Estás seguro que pusiste bien tu edad?");
    }
}

//preguntarEdad();

// Ejercicio 10
function PPT(){
    let jugador1 = prompt("Jugador 1: Ingrese PIEDRA, PAPEL o TIJERA")
    jugador1 = jugador1.toUpperCase();
    if (jugador1 != "PIEDRA" && jugador1 != "PAPEL" && jugador1 != "TIJERA"){
        alert('No has escrito una opción válida, reinicie la pagina');
        return;
    }
    let jugador2 = prompt("Jugador 2: Ingrese PIEDRA, PAPEL o TIJERA")
    jugador2 = jugador2.toUpperCase();
    if (jugador2 != "PIEDRA" && jugador2 != "PAPEL" && jugador2 != "TIJERA"){
        alert('No has escrito una opción válida, reinicie la pagina');
        return;
    }

    if(jugador1 === jugador2){
        alert(`Empate`);
    }
    else if((jugador1 === "PAPEL" && jugador2 === "PIEDRA") || (jugador1 === "TIJERA" && jugador2 ==="PAPEL")
    || (jugador1 === "PIEDRA" && jugador2 === "TIJERA")){
        alert("Gana el Jugador 1");
    }
    else{
        alert("Gana el Jugador 2");
    }
}

//PPT();

// Ejercicio 11
function colores(){
    let color = prompt("Ingrese un color")

    color = color.toLowerCase();

    switch (color) {
        case "blanco":
        case "negro":
            alert("Falta de color");
            break;
        case "verde":
            alert("El color de la naturaleza");
            break;
        case "azul":
            alert("El color del agua");
            break;
        case "amarillo":
            alert("El color del sol");
            break;
        case "rojo":
            alert("El color del fuego");
            break;
        case "marrón":
            alert("El color de la tierra");
            break;
        default:
            alert("Excelente elección, no lo habíamos pensado");
            break;
    }
}

//colores();

// Ejercicio 12
function operacion(){
    let numero1 = prompt("Ingrese el primer número:")
    let numero2 = prompt("Ingrese el segundo número:")
    let operador = prompt("Ingrese un operador (+, -, *, /):")

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    if(operador != "+" && operador != "-" && operador != "*" && operador != "/"){
        alert("Error en los datos ingresados.");
        return;
    }

    if(operador === "/" && numero2 === 0){
        alert("No se puede dividir por cero.");
        return;
    }

    switch(operador){
        case "+":
            alert(`el resultado es ${numero1 + numero2}`); return;
        case "-":
            alert(`el resultado es ${numero1 - numero2}`); return;
        case "*":
            alert(`el resultado es ${numero1 * numero2}`); return;
        case "/":
            alert(`el resultado es ${numero1/numero2}`); return;
    }
}

//operacion();

//Ejercicio 13
function DNI(){
    let nombre = prompt("Ingrese su nombre completo:");
    let fecha_nac = prompt("Ingrese su fecha de nacimiento (XX/XX/XXXX)");
    let num_doc = prompt("Ingrese su numero de documento (sin .):")
    let direccion = prompt("Ingrese su dirección:")

    function persona(nombre, fecha_nac, num_doc, direccion){
        this.nombre = nombre;
        this.fecha_nac = fecha_nac;
        this.num_doc = num_doc;
        this.direccion = direccion;
    }
    let confirmacion = window.confirm("Nombre: " + nombre + ", Fecha de Nacimiento: " + fecha_nac
    + ", Numero Documento: " + num_doc +", Dirección: " + direccion + ". Están correctos los datos?")
    if(confirmacion){
        let dni = new persona(nombre, fecha_nac, num_doc, direccion);
        console.table(dni);
        console.log("datos cargados correctamente")
    }
    else{
        alert ("Datos incorrectos");
        return;
    } 
}

//DNI();