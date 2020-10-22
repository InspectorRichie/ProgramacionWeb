//Variables
// var, let y const

// Var - puede ser utilizada en cualquier punto del documento.
//Incluso antes de ser definida

console.log(uno);
var uno = "lmao";
console.log(uno);

var x = 1;

if(true){
    var x = "true";
    console.log(x);
}
console.log(x);

// let - definicion de bloque, es variable y no se puede utilizar
// antes de ser declarada

let dos = "otrovalor";
console.log(dos);


let y = "falso";
if(true) {
    let y = "verdadero";
    console.log(y);
}
console.log(y);

var var1 = 1;
var var2 = 2;

let let1 = 1;

const tres = "igual";

// valores de verdadero y falso

// valor falso: undefined, null, 0, ""
// valor verdadero: valor diferente a o falso

let mes;
mes = 10;

if(mes){
    console.log("es true");
} else {
    console.log("es false")
}

// operadores de igual

//doble igual - devuelve verdadero si los dos operandos son iguales

// triple igual - devuelve verdadero si los operandos son iguales y mismo tipo

// condicion    ?    true   :   false;

mes != "10" ? console.log("si") : console.log("no");

//template de string

let nombre = "juan";
let apellido = "Lopez";
const nacimiento = 1990;
function calculaEdad(nac){
    return 2020 - nac;
}

console.log(nombre + " " + apellido + " , su edad: " + calculaEdad(nacimiento))

console.log(`${nombre} ${apellido}, su edad: ${calculaEdad(nacimiento)}`);

//funciones de flecha

const anios = [2000, 2005, 2010, 2020];

var edad = anios.map(function(el){
    return 2020- el;
});
console.log(edad);

let edadNueva = anios.map(el => 2020 - el);
console.log(edadNueva);

edadNueva = anios.map((el, index) => `Edad ${index + 1}: ${2020 - el}`);
console.log(edadNueva);

edadNueva = anios.map(
    (el, index) => {
        const actual = new Date().getFullYear();
        const edad = actual - el;
        return `Edad ${index + 1}: ${edad}`
    }
);
console.log(edadNueva);

const cuadrado = function (num) {
    return num * num;
}
console.log(cuadrado(2));

const cuadrado2 = (num) => {
    return num * num;
}
console.log(cuadrado2(2));

const cuadrado3 = (num) => num * num;
console.log(cuadrado3(2));

const frutas = [
    {
        nombre: "Manzana",
        cantidad: 2
    },
    {
        nombre: "Fresa",
        cantidad: 5
    },
    {
        nombre: "Blueberry",
        cantidad: 8
    },
    {
        nombre: "Naranja",
        cantidad: 12
    }
];

const menores10 = frutas.filter(fruta => fruta.cantidad < 10 && fruta.nombre.startsWith("M"));
console.log(menores10)