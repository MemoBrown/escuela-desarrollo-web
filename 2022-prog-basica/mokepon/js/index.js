const hideRestartButton = document.getElementById('restart')
const showSelectAttack = document.getElementById('select-attack')
const petButtonPlayer = document.getElementById('pet-button')

const restartBtn = document.getElementById('restart-button')

const hideSelectPet = document.getElementById('select-pet')
const petSelected = document.getElementById('pet-selected')

const petSelectedEnemy = document.getElementById('enemy-pet-selected')

const petLifes = document.getElementById('pet-lifes')
const enemyPetLifes = document.getElementById('enemy-pet-lifes')

const sectionMessages = document.getElementById("attack-result")
const newPlayerAttacks = document.getElementById("player-attacks")
const newEnemyAttacks = document.getElementById("enemy-attacks")

const showRestartButton = document.getElementById('restart')

const form = document.getElementById('form')
const contenedorAtaques = document.getElementById('contenedor-ataques')

let mokepones = []
let playerAttack = []
let enemyAttack = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let inputPydos
let petPlayer
let ataquesMokepon
let ataquesMokeponEnemigo
let fireBtn
let waterBtn
let earthBtn
let botones = []
let playerLifes = 6
let enemyLifes = 6

class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
  }
}

let hipodoge = new Mokepon('Hipodoge', null, 5)
let capipepo = new Mokepon('Capipepo', null, 5)
let ratigueya = new Mokepon('Ratigueya', null, 5)
let langostelvis = new Mokepon('Langostelvis', null, 5)
let tucapalma = new Mokepon('Tucapalma', null, 5)
let pydos = new Mokepon('Pydos', null, 5)

hipodoge.ataques.push(
  {nombre: 'Agua', id: 'water-btn'},
  {nombre: 'Agua', id: 'water-btn'},
  {nombre: 'Agua', id: 'water-btn'},
  {nombre: 'Fuego', id: 'fire-btn'},
  {nombre: 'Tierra', id: 'earth-btn'}
)
capipepo.ataques.push(
  {nombre: 'Tierra', id: 'earth-btn'},
  {nombre: 'Tierra', id: 'earth-btn'},
  {nombre: 'Tierra', id: 'earth-btn'},
  {nombre: 'Agua', id: 'water-btn'},
  {nombre: 'Fuego', id: 'fire-btn'}
)
ratigueya.ataques.push(
  {nombre: 'Fuego', id: 'fire-btn'},
  {nombre: 'Fuego', id: 'fire-btn'},
  {nombre: 'Fuego', id: 'fire-btn'},
  {nombre: 'Agua', id: 'water-btn'},
  {nombre: 'Tierra', id: 'earth-btn'}
)
langostelvis.ataques.push(
  {nombre: 'Agua', id: 'water-btn'},
  {nombre: 'Agua', id: 'water-btn'},
  {nombre: 'Agua', id: 'water-btn'},
  {nombre: 'Fuego', id: 'fire-btn'},
  {nombre: 'Tierra', id: 'earth-btn'}
)
tucapalma.ataques.push(
  {nombre: 'Tierra', id: 'earth-btn'},
  {nombre: 'Tierra', id: 'earth-btn'},
  {nombre: 'Tierra', id: 'earth-btn'},
  {nombre: 'Agua', id: 'water-btn'},
  {nombre: 'Fuego', id: 'fire-btn'}
)
pydos.ataques.push(
  {nombre: 'Fuego', id: 'fire-btn'},
  {nombre: 'Fuego', id: 'fire-btn'},
  {nombre: 'Fuego', id: 'fire-btn'},
  {nombre: 'Agua', id: 'water-btn'},
  {nombre: 'Tierra', id: 'earth-btn'}
)

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)


function startGame() {
  
  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
    <label for=${mokepon.nombre}>
        <input type="radio" name="pet" id=${mokepon.nombre} class="nes-radio is-dark" checked>
        <span>${mokepon.nombre}</span>
      </label>
      <br />
      `
      form.innerHTML += opcionDeMokepones

      inputHipodoge = document.getElementById('Hipodoge')
      inputCapipepo = document.getElementById('Capipepo')
      inputRatigueya = document.getElementById('Ratigueya')
      inputLangostelvis = document.getElementById('Langostelvis')
      inputTucapalma = document.getElementById('Tucapalma')
      inputPydos = document.getElementById('Pydos')

    })
    
  hideRestartButton.style.display = 'none'
  showSelectAttack.style.display = 'none'
  petButtonPlayer.addEventListener('click', selectPetPlayer)

  restartBtn.addEventListener('click', restartGame)
}

function selectPetPlayer() {
  hideSelectPet.style.display = 'none'
  showSelectAttack.style.display = 'block'

  if(inputHipodoge.checked == true) {
    petSelected.innerHTML = inputHipodoge.id
    petPlayer = inputHipodoge.id
  } else if(inputCapipepo.checked == true) {
    petSelected.innerHTML = inputCapipepo.id
    petPlayer = inputCapipepo.id
  } else if(inputRatigueya.checked == true) {
    petSelected.innerHTML = inputRatigueya.id
    petPlayer = inputRatigueya.id
  } else if(inputLangostelvis.checked == true) {
    petSelected.innerHTML = inputLangostelvis.id
    petPlayer = inputLangostelvis.id
  } else if(inputTucapalma.checked == true) {
    petSelected.innerHTML = inputTucapalma.id
    petPlayer = inputTucapalma.id
  } else if(inputPydos.checked == true) {
    petSelected.innerHTML = inputPydos.id
    petPlayer = inputPydos.id
  } else {
    alert('Selecciona una mascota')
  }

  extraerAtaques(petPlayer)
  selectPetPlayerEnemy()
}

function extraerAtaques(petPlayer) {
  let ataques
  for (let i = 0; i < mokepones.length; i++) {
    if (petPlayer === mokepones[i].nombre) {
      ataques = mokepones[i].ataques
    }
  }
  mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMokepon = `
      <button id=${ataque.id} class="nes-btn attack-btn">${ataque.nombre}</button>
    `
    contenedorAtaques.innerHTML += ataquesMokepon
  })
  fireBtn = document.getElementById('fire-btn')
  waterBtn = document.getElementById('water-btn')
  earthBtn = document.getElementById('earth-btn')
  botones = document.querySelectorAll('.attack-btn')

}

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      if (e.target.textContent == 'Fuego') {
        playerAttack.push('Fuego 🔥')
        console.log(playerAttack)
        boton.classList.add('is-error')
      } else if(e.target.textContent == 'Agua') {
        playerAttack.push('Agua 💧')
        console.log(playerAttack)
        boton.classList.add('is-primary')
      } else {
        playerAttack.push('Tierra 🌱')
        console.log(playerAttack)
        boton.classList.add('is-success')
      }
      enemyRandomAttack()
    })
  })
}

function selectPetPlayerEnemy() {
  let randomPet = random(0, mokepones.length - 1)
  petSelectedEnemy.innerHTML = mokepones[randomPet].nombre
  ataquesMokeponEnemigo = mokepones[randomPet].ataques
  secuenciaAtaque()
}

function enemyRandomAttack() {
  let enemyRandomAttack = random(0, ataquesMokeponEnemigo.length -1)

  if(enemyRandomAttack == 0 || enemyRandomAttack == 1) {
    enemyAttack.push("Fuego 🔥")
  } else if(enemyRandomAttack == 3 || enemyRandomAttack == 4) {
    enemyAttack.push("Agua 💧")
  } else {
    enemyAttack.push("Tierra 🌱")
  }
  console.log(enemyAttack)
  startFight()
}

function startFight() {
  if(playerAttack.length === 5) {
    kombat()
  }
}

function kombat() {
  for (let index = 0; index < playerAttack.length; index++) {
    console.log(playerAttack[index])
  }

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