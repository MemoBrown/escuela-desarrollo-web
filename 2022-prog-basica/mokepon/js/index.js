let playerAttack
let enemyAttack
let result

function startGame() {
  let petButtonPlayer = document.getElementById('pet-button')
  petButtonPlayer.addEventListener('click', selectPetPlayer)

  let fireBtn = document.getElementById('fire-btn')
  fireBtn.addEventListener('click', fireAttack)

  let waterBtn = document.getElementById('water-btn')
  waterBtn.addEventListener('click', waterAttack)

  let earthBtn = document.getElementById('earth-btn')
  earthBtn.addEventListener('click', earthAttack)
}

function selectPetPlayer() {
  let inputHipodoge = document.getElementById('hipodoge')
  let inputCapipepo = document.getElementById('capipepo')
  let inputRatigueya = document.getElementById('ratigueya')
  let inputLangostelvis = document.getElementById('langostelvis')
  let inputTucapalma = document.getElementById('tucapalma')
  let inputPydos = document.getElementById('pydos')
  let petSelected = document.getElementById('pet-selected')
  
  if(inputHipodoge.checked == true) {
    petSelected.innerHTML = "Hipodoge"
  } else if(inputCapipepo.checked == true) {
    petSelected.innerHTML = "Capipepo"
  } else if(inputRatigueya.checked == true) {
    petSelected.innerHTML = "Ratigueya"
  } else if(inputLangostelvis.checked == true) {
    petSelected.innerHTML = "Langostelvis"
  } else if(inputTucapalma.checked == true) {
    petSelected.innerHTML = "Tucapalma"
  } else if(inputPydos.checked == true) {
    petSelected.innerHTML = "Pydos"
  } else {
    alert('Selecciona una mascota')
  }

  selectPetPlayerEnemy()
}

function selectPetPlayerEnemy() {
  let randomPet = random(1, 6)
  let petSelectedEnemy = document.getElementById('enemy-pet-selected')

  if(randomPet == 1) {
    petSelectedEnemy.innerHTML = "Hipodoge"
  } else if(randomPet == 2) {
    petSelectedEnemy.innerHTML = "Capipepo"
  } else if(randomPet == 3) {
    petSelectedEnemy.innerHTML = "Ratigueya"
  } else if(randomPet == 4) {
    petSelectedEnemy.innerHTML = "Langostelvis"
  } else if(randomPet == 5) {
    petSelectedEnemy.innerHTML = "Tucapalma"
  } else {
    petSelectedEnemy.innerHTML = "Pydos"
  }

}

function fireAttack() {
  playerAttack = "Fuego 🔥"
  enemyRandomAttack()
}

function waterAttack() {
  playerAttack = "Agua 💧"
  enemyRandomAttack()
}

function earthAttack() {
  playerAttack = "Tierra 🌱"
  enemyRandomAttack()
}

function enemyRandomAttack() {
  let enemyRandomAttack = random(1,3)

  if(enemyRandomAttack == 1) {
    enemyAttack = "Fuego 🔥"

  } else if(enemyRandomAttack == 2) {
    enemyAttack = "Agua 💧"

  } else {
    enemyAttack = "Tierra 🌱"
  }

  kombat()
}

function kombat() {
  if (enemyAttack == playerAttack) {
    result = "Empate 😐"
  } else if (playerAttack == 'Fuego 🔥' && enemyAttack == 'Tierra 🌱') {
    result = "Ganaste 🏆"
  } else if (playerAttack == 'Agua 💧' && enemyAttack == 'Fuego 🔥') {
    result = "Ganaste 🏆"
  } else if (playerAttack == 'Tierra 🌱' && enemyAttack == 'Agua 💧') {
    result = "Ganaste 🏆"
  } else {
    result = "Perdiste 😓"
  }

  createMessage()
}

function createMessage() {
  let sectionMessages = document.getElementById("messages-container")
  let message = document.createElement('p')
  message.innerHTML = `Tu mascota ataco con ${playerAttack}, la mascota del enemigo ataco con ${enemyAttack} --- ${result}`
  sectionMessages.appendChild(message)
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', startGame)