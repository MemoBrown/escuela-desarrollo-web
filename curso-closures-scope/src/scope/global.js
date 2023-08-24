// variables

var a // declarar una variables
var b = "b" // declarar y asignar
b = "bb" // reasignacion
var a = "aa" // redeclaracion


// Global Scope
var fruit = "Apple" // global

function bestFruit() {
  console.log(fruit);
}

bestFruit()

function countries() {
  country = "Mexico" // Si no declaramos la varibale dentro de la funcion pasara a ser global por defecto.
  console.log(country);
}

countries()
console.log(country);