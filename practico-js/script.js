const h1 = document.querySelector('h1')
const input1 = document.getElementById("calculo1")
const input2 = document.getElementById("calculo2")
const btn = document.getElementById("btn-calcular")
const resultado = document.getElementById("resultado")


function btnOclick() {
  if(input1.value === "" && input2.value === "") {
    resultado.innerHTML = "Escribe un numero"
  } else {
    resultado.innerHTML = parseInt(input1.value) + parseInt(input2.value)
  }
}