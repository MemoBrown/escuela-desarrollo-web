function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion(jugada) {
  let resultado = ""
  if(jugada == 1) {
    resultado = "Elegiste piedra 🪨"
  } else if (jugada == 2) {
    resultado = "Elegiste papel 📃"
  } else if (jugada == 3) {
    resultado = "Elegiste tijera ✂️"
  } else {
    resultado = "MAL ELEGIDO"
  }
  return resultado
}

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while(triunfos < 3 && perdidas < 3) {
  pc = random(1,3)
  jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")

  alert("Tu eliges: " + eleccion(jugador))
  alert("PC elige: " + eleccion(pc))

  if (pc == jugador) {
    alert("EMPATE")
  } else if (jugador == 1 && pc == 3) {
    alert("GANASTE")
    triunfos = triunfos + 1
  } else if (jugador == 2 && pc == 1) {
    alert("GANASTE")
    triunfos = triunfos + 1
  } else if (jugador == 3 && pc == 2) {
    alert("GANASTE")
    triunfos = triunfos + 1
  } else {
    alert("PERDISTE")
    perdidas = perdidas + 1
  }
}

alert(`Ganaste ${triunfos} veces y perdiste ${perdidas} veces.`)