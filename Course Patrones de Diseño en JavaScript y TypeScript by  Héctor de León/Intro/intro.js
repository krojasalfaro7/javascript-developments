/**
 * Funciones de primer orden y orden superior
 * **/

function sum(a, b) {
    return a + b;
}

let result = sum(2, 3);
console.log("Resultado de la suma:", result);

const fSum = sum; // funcion de primer orden: Puede almacenar la referencia de una funcion y ejecutarlo directamente.
result = fSum(5, 6);
console.log("Resultado de la funcion de primer orden:", result);

// Las funciones de orden superiorp pueden recibir funciones de primer orden como parametro
function execute(fn, a, b) {
    console.log("Ejecuatando funcion de orden superior");
    return fn(a, b);
}

const result2 = execute(sum, 6, 9);
console.log("Resultado de funcion de orden superior: ", result2)

/**
 * Arrow function (funcion anonima)
 * **/
const arrowFunctionExample = () => console.log("Ejemplo de funcion anonima");
arrowFunctionExample();

const result3 = execute((a, b) => a*b, 56, 9);
console.log("Resultado de la funcion de orden superior recibiendo una arrow function", result3)


/**
 * ForEach (inmutable)
 * **/
const names = ['Hector', 'Pedro', 'Jose'];
names.forEach((name) => console.log(name));
names.forEach((name) => console.log(name.toUpperCase()));
console.log(names);
names.sort();
console.log(names);

/**
 * map (inmutable)
 * **/
const namesUpper = names.map((name)=>name.toUpperCase())
console.log(namesUpper);
console.log(names);

/**
 * reduce
 * **/
// Array Sum
const numbers = [1,21,2,34,34];
const resSum = numbers.reduce((ac, number) => ac + number, 0);
console.log("Suma con reduce: ", resSum);


/**
 * Orientacion a objetos
 * **/

// clase
class Drink {
    constructor(name) {
        this.name = name;
    }
    
    info() {
        return "La bebida es: " + this.name;
    }
}

const drink = new Drink('agua');
console.log(drink.name);
console.log(drink.info());

// funcional
function Drink2(name) {
    this.name = name;
    this.info = () => "La bebida es: " + this.name;
}

const drink2 = new Drink2('agua');
console.log(drink2.name);
console.log(drink2.info());

// Herencia

class Beer extends Drink {
    constructor(name, alcohol) {
        super(name);
        this.alcohol = alcohol
    }

    info() {
        return super.info() + ', grado de alcohol: ' + this.alcohol;
    }
}

const beer = new Beer('Polarcita', 4.6);
console.log(beer.info());