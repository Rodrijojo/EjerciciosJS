function saludar(nombre){
    console.log("Hola " + nombre);
}

function multiplicar(n1, n2){
    console.log(n1*n2);
}

function areaTriangulo(base, altura){
    console.log(base * altura / 2);
}

function perimetroTriangulo(lado1, lado2, lado3){
    console.log(lado1+lado+lado3);
}

function calcularPrecio(precio, cantidad){
    let precioTotal = precio*cantidad;
    if(cantidad >= 20){
        console.log(precioTotal*0.8);
        return precioTotal * 0.8;
    }
    else if(cantidad >= 10){
        console.log(precioTotal*0.9);
        return precioTotal * 0.9;
    }
    else{
        console.log(precioTotal);
        return precioTotal;
    }
}

function esMayorDeEdad(edad){
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    }
    else{
        console.log ("Eres menor de edad")
    }
}

function calcularImpuesto(ingreso){
    if(ingreso > 20000){
        console.log("El impuesto es de $" + ingreso*0.2)
    }
    else if(ingreso > 10000 && ingreso <= 20000){
        console.log("El impuesto es de $" + ingreso*0.15)
    }
    else if(ingreso <= 10000){
        console.log("El impuesto es de $" + ingreso*0.1)
    }
}

function verificarDia(numeroDia) {
    switch (numeroDia) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log("Es un día laboral");
            return "Es un día laboral";
        case 6:
        case 7:
            console.log("Es fin de semana");
            return "Es fin de semana";
        default:
            console.log("Numero de dia invalido");
            return "Número de día inválido";
    }
}

