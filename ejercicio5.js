/*Escriba un programa que dados la distancia recorrida por un objeto y el
tiempo que tomö eI objeto en recorrer esa distancia, calcule su velocidad.
*/

function velocidad(distancia, tiempo){
    return distancia/tiempo;
}

//Probando
console.log("Distancia: 100, Tiempo: 10");
console.log(velocidad(500, 10));

let num1 = 12;
let num2 = 24;
let num3 = 25;
let num4 = 92;
let num5 = 91;

let valor=(num5 > num2 && num4 < num3) || num1 > num5 && (num1 === num3 || num2 == num5);
console.log(valor);