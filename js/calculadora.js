
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function cuadradoDeUnNumero(a) {
    return multiplicar(a, a);
}

function promedioDeTresNumeros(a, b, c) {
    let respuesta = sumar(a, b);
    respuesta = sumar(respuesta, c);
    respuesta = dividir(respuesta, 3);
    return respuesta;
}

function calcularPorcentaje(a, b) {
    let respuesta = dividir(b, 100);
    respuesta = multiplicar(a, respuesta);
    return respuesta;
}

function GeneradorDePorcentaje(a, b) {
    let respuesta = dividir(a, b);
    respuesta = multiplicar(respuesta, 100);
    return respuesta;
}

console.log("-------------- Testeo de Operaciones / Calculadora --------------");
var a = 0;
var b = 0;
var c = 0;
console.log("------- Operacion Suma ------");
a = parseInt(prompt("ingrese un numero para sumar"));
b = parseInt(prompt("ingrese otro numero para sumar"));
console.log(sumar(a, b));
console.log("------- Operacion Multiplicación ------");
a = parseInt(prompt("ingrese un numero para multiplicar"));
b = parseInt(prompt("ingrese otro numero para multiplicar"));
console.log(multiplicar(a, b));
console.log("------- Operacion Dividir ------");
a = parseInt(prompt("ingrese un numero para dividir"));
b = parseInt(prompt("ingrese otro numero para dividir"));
console.log(dividir(a, b));
console.log("------- Operacion Cuadrado ------");
a = parseInt(prompt("ingrese un numero para obtener el cuadrado"));
console.log(cuadradoDeUnNumero(a));
console.log("------- Operacion Promedio ------");
a = parseInt(prompt("ingrese un numero para obtener el promedio de 3"));
b = parseInt(prompt("ingrese otro numero para obtener el promedio de 3"));
c = parseInt(prompt("ingrese otro numero para obtener el promedio de 3"));
console.log(promedioDeTresNumeros(a, b, c));
console.log("------- Operacion Porcentaje ------");
a = parseInt(prompt("ingrese un numero para obtener el porcentaje"));
b = parseInt(prompt("ingrese el porcentaje del numero anterior"));
console.log(calcularPorcentaje(a, b));
console.log("------- Operacion Generar Porcentaje ------");
a = parseInt(prompt("ingrese un numero para generar porcentaje"));
b = parseInt(prompt("ingrese otro numero para generar porcentaje"));
console.log(GeneradorDePorcentaje(a, b));