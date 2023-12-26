var arr = ["piedra","papel","tijera"];

function juego(userOp){
    //turno de la cpu
    var cpuOp = Math.floor(Math.random() * arr.length)
    var userOp = String(userOp).toLowerCase();
    //Turno del usuario
    // user's turn
    if(userOp == "piedra" && arr[cpuOp] == "tijera"){
        console.log(`Usuario: ${userOp} | CPU: ${arr[cpuOp]}` );
        console.log("Gana el usuario");
    } else if(userOp == "piedra" && arr[cpuOp] == "papel"){
        console.log(`Usuario: ${userOp} | CPU: ${arr[cpuOp]}` );
        console.log("Gana la CPU");
    } else if(userOp == "papel" && arr[cpuOp] == "piedra"){
        console.log(`Usuario: ${userOp} | CPU: ${arr[cpuOp]}` );
        console.log("Gana el usuario :3");
    } else if(userOp == "papel" && arr[cpuOp] == "tijera"){
        console.log(`Usuario: ${userOp} | CPU: ${arr[cpuOp]}` );
        console.log("Gana la CPU");
    } else if(userOp == "tijera" && arr[cpuOp] == "papel"){
        console.log(`Usuario: ${userOp} | CPU: ${arr[cpuOp]}` );
        console.log("Gana el usuario ");
    } else if(userOp == "tijera" && arr[cpuOp] == "piedra"){
        console.log(`Usuario: ${userOp} | CPU: ${arr[cpuOp]}` );
        console.log("Gana la CPU");
    } else {
        console.log(`Usuario: ${userOp} | CPU: ${arr[cpuOp]}` );
        console.log("Empate, ambos jugadores sacan " + userOp);
    }
}
// Ingrese piedra, papel o tijeras
juego("Piedra");