//Reto 3
//funcion para verificar dia laboral de lunes a sabado
function esDiaLaboral(fecha){
    var dia = fecha.getDay();
    if(dia >= 1 && dia <= 6){
        return "Es dia laboral";
    }else{
        return "Es fin de semana";
    }
}
//funcion para verificar si es hora laboral de 9 a 18 hrs
function esHoraLaboral(){
    var hora = new Date().getHours();
    if(hora >= 9 && hora <= 18){
        return "Es hora laboral";
    }else{
        return "Es hora de descanso";
    }
}
//funcion comprobando dia y fecha
function esDiaHoraLaboral(fecha,hora){
    if(esDiaLaboral(fecha) == "Es dia laboral" && esHoraLaboral() == "Es hora laboral"){
        return "Es dia y hora laboral";
    }else{
        return "No es dia y hora laboral";
    }
}
//comprobando
console.log("Reto 3");
console.log(esDiaHoraLaboral(new Date(),new Date().getHours()));
console.log(esDiaHoraLaboral(new Date(2023,02,18),9));
console.log(esDiaHoraLaboral(new Date(2023,02,19),9));

//Reto 4
// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
 */
console.log("Reto 4");
function contarVerdadero(array){
    var contador = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] == true){
            contador++;
        }
    }
    return contador;
}
//comprobando
console.log(contarVerdadero([true, false, false, true, false]));
console.log(contarVerdadero([false, false, false, false]));
console.log(contarVerdadero([]));

//Reto 5
// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

function mcd(a,b){
    if(b == 0){
        return a;
    }else{
        return mcd(b,a%b);
    }
}
//comprobando
console.log("Reto 5");
console.log(mcd(12,8));
console.log(mcd(50,40));
console.log(mcd(7,3));

//Reto 6
// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion 
console.log("Reto 6");
function fibonacci(n){
    if(n == 0){
        return 0;
    }else if(n == 1){
        return 1;
    }else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
//comprobando
console.log(fibonacci(0));
console.log(fibonacci(10));
console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(9));