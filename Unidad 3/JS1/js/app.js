console.log("Hola de nuevo");

// Variables: var y let

var mes = "Octubre";
mes = 10;

console.log(typeof(mes));

var hola;
hola = null;
console.log(hola);

console.log(document);
document.title = "Prueba";

function suma (a, b) {
    alert("mi mensaje");
    document.getElementById('resultado').innerHTML = a + b;
}

var imprimir = function (dato) {
    document.getElementById("valor").innerHTML = dato;
}

var aumentar = function() {
    localStorage.cuenta++;
    imprimir(localStorage.cuenta);
}

var reiniciar = function () {
    localStorage.cuenta = 0;
    imprimir(localStorage.cuenta);
}

var eliminar = function () {
    localStorage.removeItem("cuenta");
    imprimir(localStorage.cuenta);
}

if (typeof(Object) != "undefined"){
    if(localStorage.cuenta){
        imprimir(localStorage.cuenta);
    } else {
        localStorage.cuenta = 0;
    }
}