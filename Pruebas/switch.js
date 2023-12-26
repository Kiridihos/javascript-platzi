var arr = ["piedra","papel","tijera"];

function juego(userOp){
    //turno de la cpu
    var cpuOp = arr[Math.floor(Math.random() * arr.length)]
    var userOp = String(userOp).toLowerCase();
    //Turno del usuario
    switch (true) {
        case userOp === "piedra" && cpuOp === "tijera":
            console.log(`Usuario: ${userOp} | CPU: ${cpuOp}` );
            console.log("Gana el usuario");   
            break;
        case (userOp == "piedra" && cpuOp === "papel"):
            console.log(`Usuario: ${userOp} | CPU: ${cpuOp}` );
            console.log("Gana la CPU");
            break;
        case (userOp == "papel" && cpuOp == "piedra"):
            console.log(`Usuario: ${userOp} | CPU: ${cpuOp}` );
            console.log("Gana el usuario");   
            break;
        case (userOp == "papel" && cpuOp == "tijera"):
            console.log(`Usuario: ${userOp} | CPU: ${cpuOp}` );
            console.log("Gana la CPU");  
            break;
        case (userOp == "tijera" && cpuOp == "papel"):
            console.log(`Usuario: ${userOp} | CPU: ${cpuOp}` );
            console.log("Gana el usuario");   
            break;
        case (userOp == "tijera" && cpuOp == "piedra"):
            console.log(`Usuario: ${userOp} | CPU: ${cpuOp}` );
            console.log("Gana la CPU"); 
            break;
        default:
            console.log(`Usuario: ${userOp} | CPU: ${cpuOp}` );
            console.log("Empate, ambos jugadores sacan " + userOp);
            break;
    }
}
// Ingrese piedra, papel o tijera
juego("Piedra");