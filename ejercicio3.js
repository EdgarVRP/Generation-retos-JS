const arr = [1,2,3,4,5];
const arr2 = [1, -563, 999, 0 , -1, -999];

// Encontrar el numero mas grande

function NumMasGrande(arr){
    let numMasGrande = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > numMasGrande){
            numMasGrande = arr[i];
        }
    }
    return numMasGrande;
}

//Probando
console.log(NumMasGrande(arr));
console.log(NumMasGrande(arr2));

// Encontrar el numero mas pequeño

function NumMasChico(arr){
    let numMasChico=arr[0];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]<numMasChico) {
            numMasChico=arr[index];
        }
    }
    return numMasChico
}
//Probando
console.log(NumMasChico(arr));
console.log(NumMasChico(arr2));
// Encontrar el numero mas grande y el mas pequeño
// -> [10, -9];
//inicializar array de 2 posiciones


function IntervaloMaxMin(arr){
    let intervaloMaxMin=[arr[0],arr[0]];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]<intervaloMaxMin[1]) {
            intervaloMaxMin[1]=arr[index];
        }
        if(arr[index] > intervaloMaxMin[0]){
            intervaloMaxMin[0] = arr[index];
        }
    }
    return intervaloMaxMin;
}
//Probando
console.log(IntervaloMaxMin(arr));
console.log(IntervaloMaxMin(arr2));

// Encontrar la suma de todos los resistores conectados en serie
// sumResistance([1, 5, 6, 3]) -> "15 ohms"
// sumResitance([14,3.5,6]) -> "23.5 ohms"
// Ohms >= 1
function ResistenciaSerie(array) {
    let suma=0;
    for (let i = 0; i < array.length; i++) {
        suma+= array[i];
    }
    console.log(suma)
}
//Probando
ResistenciaSerie([1, 5, 6, 3]);
ResistenciaSerie([14,3.5,6]);



// Dado un numero, regresar el mismo numero divido en sus mitades dentro de un array
// numDiv(4) -> [2, 2];
// nuvDiv(10) -> [5, 5];
// numDiv(100) -> [50,50];
function dividiendoNum(params) {
    return [params/2,params/2];
}
//comprobando
console.log(dividiendoNum(4));
console.log(dividiendoNum(10));
console.log(dividiendoNum(100));