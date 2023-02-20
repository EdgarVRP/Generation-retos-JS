// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(["Felipe", "Fer", "Zabdiel"]) -> FFZ
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR

function secretName(arr) {
    let nombre = '';
    for (let i = 0; i < arr.length; i++) {
        nombre += arr[i][0];
    }
    return nombre;
}

// Probando
console.log(secretName(["Felipe", "Fer", "Zabdiel"]))
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']))
console.log(secretName(['Harry', 'Ron', 'Hermione']))

// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online'

function onlineStatus(arr) {
    let online = '';
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            online += 'and one more online';
        } else {
            online += arr[i] + ', ';
        }
    }
    return online;
}

// Probando
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']))
console.log(onlineStatus(['enero1','febrero2','marzo3','abril4','mayo5','junio6','julio7','agosto8','septiembre9','octubre10','noviembre11','diciembre12']))


// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]

function arrayMultiplos(num, long) {
    let arrayNuevo= [];
    for (let i = 0; i < long; i++) {
        arrayNuevo[i]=num*(i+1);
    }
    return arrayNuevo
}
console.log(arrayMultiplos(2, 10))
console.log(arrayMultiplos(17,6))
// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false

function positiveDom(arr){
    //eliminando el elemento medio
    if (arr.length%2!=0) {
        arr.splice(Math.floor(arr.length/2),1);
    }
    //contando los positivos
    let positivos=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>0) {
            positivos++;
        }
        else{
            positivos--;
        }
    }
    return positivos>0;
}

// Probando
console.log(positiveDom([-1, -3, -5, 4, 6767]))
// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]

function antipode(arr) {
    //parte 1
    if (arr.length%2!=0) {
        arr.splice(Math.floor(arr.length/2),1);
    }
    //parte 2
    let arr2=arr.slice(arr.length/2);
    arr2.reverse();
    let arr3=[];
    //parte 3
    for (let i = 0; i < arr.length/2; i++) {
        arr3.push((arr[i]+arr2[i])/2);
    }
    return arr3;
}

// Probando
console.log(antipode([1,2,3,5,22,6]))
console.log(antipode([1,2,3,5,22,6,7]))
