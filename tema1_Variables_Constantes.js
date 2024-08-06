//Los comentarios se hacer así
/*
Podemos definir a las varialbes de dos formas, con let y con var.
El problema de definirla con var es el hoisting. (Estudiar hoisting)
Desde la versión 
*/

let nombre1 = 'alex';
let nombre2 = `alex`;
let nombre3 = "alex";

console.log(nombre1 + ' ' + nombre2 + ' ' + nombre3)

let numero = 5;

function sumar(numero1, numero2=0) {
    let suma = numero1 + numero2;
    return suma
}

console.log(sumar (numero, 45));


//Constantes

const NOMBRE1 = 'NOMBRE POR SIEMPRE'

console.log(NOMBRE1)