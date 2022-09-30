// const name = "Guillermo ";
// const lastName = "Moreno";
// const fullName = name + lastName;
// const nickname = "Guille";

// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function saludo(name, lastName, nickname) {
  let fullName = name + lastName
  console.log(`Mi nombre completo es ${fullName}, pero prefiero que me digas ${nickname}`)
}

saludo("Guillermo ", "Moreno", "Guille")



const tipoDeSuscripcion = "Expert";

if(tipoDeSuscripcion == "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if(tipoDeSuscripcion == "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if(tipoDeSuscripcion == "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if(tipoDeSuscripcion == "ExpertPlus") {
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
  console.log('Adquiere una suscripcion')
}


for (let index = 0; index < 5; index++) {
  console.log(`El valor de index es ${index}`)
}

let index = 0
while (index < 5) {
  console.log(`El valor de index es ${index}`)
  index++
}

let i = 10
while (i >= 2) {
  console.log(`El valor de i es ${i}`)
  i--
}


const obj = {
  user: "Guillermo",
  age: 20,
  country: "Mexico"
}
console.log(obj.age);


function printArray(arr) {
  console.log(arr[0]);
}

printArray([10, 20, 30, 40])

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray([10, 20, 30, 40, 50, 60])

const obj2 = {
  user: "Guillermo",
  age: 20,
  country: "Mexico"
}


function printArrayObj(arr) {
  const arrayObj = Object.values(obj2)
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArrayObj(obj2)


function getSubscription(suscription) {
  if(suscription == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
    return;
  }
  if(suscription == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    return;
  }
  if(suscription == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    return;
  }
  if(suscription == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    return;
  }
  console.warn('Ese tipo de suscripcion no existe')
}
getSubscription("Basic")


const suscriptionTypes = {
  free: "Solo puedes tomar los cursos gratis",
  basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
  expertDuo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

function getSubscription2(suscription) {
  if(suscriptionTypes[suscription]) {
    console.log(suscriptionTypes[suscription]);
    return;
  }
  console.warn('Ese tipo de suscripcion no existe')
}
getSubscription2("expertDuo")