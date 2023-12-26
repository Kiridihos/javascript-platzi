// Aca se presenta hoisting con variables al llamarla antes de haberla 
// inicializado
console.log(miNombre);
var miNombre = "Diego";


// hoisting con fuciones

hey();

function hey() {
    console.log("Hola" + miNombre);
}