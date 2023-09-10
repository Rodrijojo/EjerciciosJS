// Marcos Rodríguez

// ej1

const ej1 = (mensaje) => console.log(mensaje);

//ej1("Hola mundo")

// ej2

const ej2 = (numero1, numero2) => numero1*numero2;

//console.log(ej2(2,5));

// ej3

const array = [1,2,3,4,5,6,7,8,9];

// console.log(array.map(ej2));

// ej4
function ej4(arrayCervezas) {
    arrayCervezas.sort((a, b) => b.abv - a.abv);

    return arrayCervezas.slice(0, 10);
}

//console.log(ej4(beers));

// ej5

function ej5(arrayCervezas) {
    arrayCervezas.sort((a, b) => a.ibu - b.ibu);

    return arrayCervezas.slice(0, 10);
}

//console.log(ej5(beers));

// ej6

function ej6(arrayCervezas, nombre){

    let cervezaEncontrada = arrayCervezas.find(beer => beer.name == nombre);

    if( cervezaEncontrada != undefined ) {
        console.log(cervezaEncontrada);
    }
    else{
        console.log("No se encontro la cerveza") ;
    }
}

//ej6( beers, "Electric India" );

// ej7

function ej7 (arrayCervezas, valor) {

    let cervezaEncontrada = arrayCervezas.find(beer => beer.ibu == valor);
    
    if( cervezaEncontrada != undefined ) {
        console.log(cervezaEncontrada);
    }
    else{
        console.log("No existe una cerveza con un ibu de " + valor);
    }
}

//ej7(beers, 8);
//ej7(beers, 10000);

// ej8

function ej8 (arrayCervezas, nombre) {
    let cervezaEncontrada = arrayCervezas.findIndex(beer => beer.name === nombre);
    console.log(cervezaEncontrada);
    if ( cervezaEncontrada != -1){
        console.log( cervezaEncontrada );
    }
    else{
        console.log ("La cerveza no existe");
    }
}

//ej8( beers, "Electric India" );

// ej9

function ej9 (arrayBeers, abv) {

    let newArray = arrayBeers.filter((beer) => beer.abv < abv);

    console.log(newArray);
}

//ej9(beers, 4.6);

//pregunrar como hacer para que en vez de null, no me quede nada dentro de la funcion

// ej10

function ej10(arrayBeers, propiedad, boolean){
    let newArray = [].concat(arrayBeers)
    if(boolean === true){
        newArray.sort((a, b) => {
            if (a[propiedad] < b[propiedad]) {
            return -1;
           }
           if (a[propiedad] > b[propiedad]) {
             return 1;
           }
           // a debe ser igual b
           return 0;
        })
    }
    else{
        newArray.sort((a, b) => {
            if (a[propiedad] > b[propiedad]) {
            return -1;
           }
           if (a[propiedad] < b[propiedad]) {
             return 1;
           }
           // a debe ser igual b
           return 0;
        })
    }
    console.log(newArray.slice(0, 10))
}

//ej10(beers, "name", true);

//como hago para que se aplique la propiedad, que entra como string

// ej11


function ej11(arrayBeers, id){
    //let cerveza = arrayBeers.find(beer => beer.id === id)
    const tableContainer = document.getElementById(id)
    let table = "";
    let name1;
    let abv1;
    let ibu1;
    for (const beer of arrayBeers) {
        
        name1 = beer.name
        abv1 = beer.abv
        ibu1 = beer.ibu

        table += `<tr>
                    <td>${name1}</td>
                    <td>${abv1}</td>
                    <td>${ibu1}</td>
                 </tr>`
        console.log(table)
    }

    
    tableContainer.innerHTML = table;
}

ej11(beers, "tablita");