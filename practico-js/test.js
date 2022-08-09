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
