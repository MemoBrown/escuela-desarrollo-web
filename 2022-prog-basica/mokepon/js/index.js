const hideRestartButton = document.getElementById('restart')
const showSelectAttack = document.getElementById('select-attack')
const petButtonPlayer = document.getElementById('pet-button')
const fireBtn = document.getElementById('fire-btn')
const waterBtn = document.getElementById('water-btn')
const earthBtn = document.getElementById('earth-btn')
const restartBtn = document.getElementById('restart-button')

const hideSelectPet = document.getElementById('select-pet')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const inputLangostelvis = document.getElementById('langostelvis')
const inputTucapalma = document.getElementById('tucapalma')
const inputPydos = document.getElementById('pydos')
const petSelected = document.getElementById('pet-selected')

const petSelectedEnemy = document.getElementById('enemy-pet-selected')

const petLifes = document.getElementById('pet-lifes')
const enemyPetLifes = document.getElementById('enemy-pet-lifes')

const sectionMessages = document.getElementById("attack-result")
const newPlayerAttacks = document.getElementById("player-attacks")
const newEnemyAttacks = document.getElementById("enemy-attacks")

const showRestartButton = document.getElementById('restart')

let mokepones = []
let playerAttack
let enemyAttack
let playerLifes = 6
let enemyLifes = 6

class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
  }
}

let hipodoge = new Mokepon('Hipodoge', null, 5)
let capipepo = new Mokepon('Capipepo', null, 5)
let ratigueya = new Mokepon('Ratigueya', null, 5)
let langostelvis = new Mokepon('Langostelvis', null, 5)
let tucapalma = new Mokepon('Tucapalma', null, 5)
let pydos = new Mokepon('Pydos', null, 5)

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)

function startGame() {
  hideRestartButton.style.display = 'none'
  showSelectAttack.style.display = 'none'
  petButtonPlayer.addEventListener('click', selectPetPlayer)
  fireBtn.addEventListener('click', fireAttack)
  waterBtn.addEventListener('click', waterAttack)
  earthBtn.addEventListener('click', earthAttack)
  restartBtn.addEventListener('click', restartGame)
}

function selectPetPlayer() {
  hideSelectPet.style.display = 'none'
  showSelectAttack.style.display = 'block'

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
    createMessage("Empate 😐")
  } else if (playerAttack == 'Fuego 🔥' && enemyAttack == 'Tierra 🌱') {
    createMessage("Ganaste 🏆")
    enemyLifes--
    enemyPetLifes.innerHTML = enemyLifes
  } else if (playerAttack == 'Agua 💧' && enemyAttack == 'Fuego 🔥') {
    createMessage("Ganaste 🏆")
    enemyLifes--
    enemyPetLifes.innerHTML = enemyLifes
  } else if (playerAttack == 'Tierra 🌱' && enemyAttack == 'Agua 💧') {
    createMessage("Ganaste 🏆")
    enemyLifes--
    enemyPetLifes.innerHTML = enemyLifes
  } else {
    createMessage("Perdiste 😓")
    playerLifes--
    petLifes.innerHTML = playerLifes
  }

  checkLifes()

}

function checkLifes() {
  if(enemyLifes == 0) {
    createLastMessage('Ganaste!! 🏆. La mascota de tu enemigo se quedo sin vidas!')
  } else if(playerLifes == 0) {
    createLastMessage('Perdiste 😓. Ya no te quedan mas vidas.')
  }
}

function createMessage(result) {
  let newAttackPlayer = document.createElement('p')
  let newAttackEnemy = document.createElement('p')

  sectionMessages.innerHTML = result
  newAttackPlayer.innerHTML = playerAttack
  newAttackEnemy.innerHTML = enemyAttack
  newPlayerAttacks.appendChild(newAttackPlayer)
  newEnemyAttacks.appendChild(newAttackEnemy)
}

function createLastMessage(gameResult) {
  sectionMessages.innerHTML = gameResult
  petButtonPlayer.addEventListener('click', selectPetPlayer)
  fireBtn.disabled = true
  waterBtn.disabled = true
  earthBtn.disabled = true
  showRestartButton.style.display = 'block'
}

function restartGame() {
  location.reload()
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', startGame)