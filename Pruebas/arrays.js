function solution(estudiantes, deathCount, nuevo) {
    
    if(deathCount > 0){
        for(var i=1; i<=deathCount; i++){
            estudiantes.pop();
        }
        estudiantes.push(nuevo);  
        return estudiantes
    } else {
        estudiantes.push(nuevo)
        return estudiantes
    }
}

solution(["Nico","Zule"], 0, "Santi")
solution(["Juan", "Juanita", "Daniela"], 1, "Julian")
solution(["Nath", "Luisa", "Noru"], 2, "Cami")

function carro(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}


var autos = []
for (var i = 1; i <= 30 ; i++){
    autos[i] = new carro("Audi", `AutoModelo${i}`, 2023);
    console.log(autos[i]);
}

function solution(car){
    
    if(car.licensePlate === undefined){
        car.drivingLicense = false;
    } else {
        car.drivingLicense = true;
    }
    return car;
}


  solution({
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  });

  typeof car.licensePlate

  solution


  function solution(cars) {
    // 👇 Este es el código que no funciona
    // This code doesn't work 
    return cars.filter(function (car) {
      if (car.licensePlate) {
        return true;
      } else {
        return false;
      }
    });
  }

  const cars = [
    {
      color: 'red',
      brand: 'Kia',
    },
    {
      color: 'gray',
      brand: 'Chevrolet',
      licensePlate: 'AAA111',
    },
    {
      licensePlate: 'RGB255',
    },
  ];
  
  solution(cars);
  cars.map(
  )

  

function presentacion(nombre, apellido, apodo){
    const name = nombre;
    const lastname = apellido;
    const completeName = name +" "+ lastname;
    const nickname = apodo;
    
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

console.log(presentacion("Diego", "Fino", "Difino"));


const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

var suscripcion =  {
  Free: "Solo puedes tomar los cursos gratis",
  Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
  ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};

if(suscripcion[tipoSuscripcion]){
  console.log(suscripcion[tipoSuscripcion]);
}


if(tipoDeSuscripcion == "Free"){
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic"){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert"){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus"){
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
  throw new Error(`No existe la suscripción ${tipoDeSuscripcion}`);
}

