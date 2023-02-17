//Reto 7
// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos

function tetrahedron(n){
    if(n == 1){
        return 1;
    }else{
        return n + tetrahedron(n-1);
    }
}
//comprobando
console.log('Reto 7');
console.log(tetrahedron(10));
console.log(tetrahedron(20));
console.log(tetrahedron(30));


//Reto 8
// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%

function areaPais(nombre, a){
    var areaTierra = 148939390;
    var proporcion = (a/areaTierra)*100;
    return nombre + " is " + proporcion.toFixed(2) + "%";
}

//comprobando
console.log('Reto 8');
console.log(areaPais("Russia", 17098242));
console.log(areaPais("USA", 9372610));




// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit

function intercambio(n){
    return Math.abs(n-1);
}

//comprobando
console.log('Reto 9');
console.log(intercambio(0));
console.log(intercambio(1));



// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

function mensaje(n){
    if(n == 0){
        return "No hay nadie en linea";
    }else if(n == 1){
        return users[0] + " esta en linea";
    }else if(n == 2){
        return users[0] + " y " + users[1] + " estan en linea";
    }else{
        return users[0] + " y " + (n-1) + " mas estan en linea";
    }
}

//comprobando
console.log('Reto 10');
var users = ["user1", "user2", "user3", "user4", "user5", "user6", "user7", "user8", "user9", "user10"];
console.log(mensaje(0));
console.log(mensaje(1));
console.log(mensaje(2));
console.log(mensaje(10));