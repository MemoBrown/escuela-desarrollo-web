const h1 = document.querySelector('h1')
const input1 = document.getElementById("calculo1")
const input2 = document.getElementById("calculo2")
const btn = document.getElementById("btn-calcular")
const resultado = document.getElementById("resultado")
const form = document.getElementById("form")

form.addEventListener('submit', sumNum);

function sumNum(event) {
  // console.log({event});
  event.preventDefault();
  if(input1.value === "" && input2.value === "") {
    resultado.innerHTML = "Escribe un numero"
  } else {
    resultado.innerHTML = parseInt(input1.value) + parseInt(input2.value)
  }
}