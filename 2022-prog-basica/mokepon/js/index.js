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

const sectionViewMap = document.getElementById('view-map')
const mapa = document.getElementById('mapa')

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
let petPlayerObject
let ataquesMokepon
let ataquesMokeponEnemigo
let fireBtn
let waterBtn
let earthBtn
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let playerLifes = 6
let enemyLifes = 6
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBg = new Image()
mapaBg.src = './assets/mokemap.png'

class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
    this.x = 20
    this.y = 30
    this.width = 80
    this.height = 80
    this.mapaFoto = new Image()
    this.mapaFoto.src = foto
    this.velocidadX = 0
    this.velocidadY = 0
  }
}

let hipodoge = new Mokepon('Hipodoge', './assets/hipodoge.png', 5)
let capipepo = new Mokepon('Capipepo', './assets/capipepo.png', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/ratigueya.png', 5)
let langostelvis = new Mokepon('Langostelvis', './assets/langostelvis.png', 5)
let tucapalma = new Mokepon('Tucapalma', './assets/tucapalma.png', 5)
let pydos = new Mokepon('Pydos', './assets/pydos.png', 5)

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
  sectionViewMap.style.display = 'none'
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
  sectionViewMap.style.display = 'none'
  iniciarMapa()
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
        boton.classList.add('is-error')
        boton.disabled = true
      } else if(e.target.textContent == 'Agua') {
        playerAttack.push('Agua 💧')
        boton.classList.add('is-primary')
        boton.disabled = true
      } else {
        playerAttack.push('Tierra 🌱')
        boton.classList.add('is-success')
        boton.disabled = true
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
  startFight()
}

function startFight() {
  if(playerAttack.length === 5) {
    kombat()
  }
}

function indexAmbosOponentes(jugador, enemigo) {
  indexAtaqueJugador = playerAttack[jugador]
  indexAtaqueEnemigo = enemyAttack[enemigo]
}

function kombat() {
  for (let index = 0; index < playerAttack.length; index++) {
    if(playerAttack[index] === enemyAttack[index]) {
      indexAmbosOponentes(index, index)
      createMessage("Empate 😐")
    } else if(playerAttack[index] === 'Fuego 🔥' && enemyAttack[index] === 'Tierra 🌱'){
        indexAmbosOponentes(index, index)
        createMessage("Ganaste 🏆")
        victoriasJugador++
        petLifes.innerHTML = playerLifes
    }  else if (playerAttack[index] === 'Agua 💧' && enemyAttack[index] === 'Fuego 🔥') {
        indexAmbosOponentes(index, index)
        createMessage("Ganaste 🏆")
        victoriasJugador++
        petLifes.innerHTML = playerLifes
    }  else if (playerAttack[index] === 'Tierra 🌱' && enemyAttack[index] === 'Agua 💧') {
        indexAmbosOponentes(index, index)
        createMessage("Ganaste 🏆")
        victoriasJugador++
        petLifes.innerHTML = playerLifes
    }  else {
        indexAmbosOponentes(index, index)
        createMessage("Perdiste 😓")
        victoriasEnemigo++
        enemyPetLifes.innerHTML = victoriasEnemigo
    }
  }

  checkLifes()

}

function checkLifes() {
  if(victoriasJugador === victoriasEnemigo) {
    createLastMessage('Esto fue un empate 😐')
  } else if(victoriasJugador > victoriasEnemigo) {
    createLastMessage('Felicidades, Ganaste!! 🏆')
  } else {
    createLastMessage('Lo sentimos, Perdiste 😓')
  }
}

function createMessage(result) {
  let newAttackPlayer = document.createElement('p')
  let newAttackEnemy = document.createElement('p')

  sectionMessages.innerHTML = result
  newAttackPlayer.innerHTML = indexAtaqueJugador
  newAttackEnemy.innerHTML = indexAtaqueEnemigo

  newPlayerAttacks.appendChild(newAttackPlayer)
  newEnemyAttacks.appendChild(newAttackEnemy)
}

function createLastMessage(gameResult) {
  sectionMessages.innerHTML = gameResult
  petButtonPlayer.addEventListener('click', selectPetPlayer)
  showRestartButton.style.display = 'block'
}

function restartGame() {
  location.reload()
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas() {
  petPlayerObject.x = petPlayerObject.x + petPlayerObject.velocidadX
  petPlayerObject.y = petPlayerObject.y + petPlayerObject.velocidadY
  lienzo.clearRect(0, 0, mapa.width, mapa.height)
  lienzo.drawImage(
    mapaBg,
    0,
    0,
    mapa.width,
    mapa.height
  )
  lienzo.drawImage(
    petPlayerObject.mapaFoto,
    petPlayerObject.x,
    petPlayerObject.y,
    petPlayerObject.width,
    petPlayerObject.height
  )
}

function moveRight() {
  const myMokepon = getObjectPet()
  myMokepon.velocidadX = 5
}
function moveLeft() {
  petPlayerObject.velocidadX = -5
}
function moveDown() {
  petPlayerObject.velocidadY = 5
}
function moveUp() {
  petPlayerObject.velocidadY = -5
}
function stopMove() {
  petPlayerObject.velocidadX = 0
  petPlayerObject.velocidadY = 0
}
function keyPressed(event) {
  switch (event.key) {
    case 'ArrowUp':
      moveUp()
      break
    case 'ArrowDown':
      moveDown()
      break
    case 'ArrowLeft':
      moveLeft()
      break
    case 'ArrowRight':
      moveRight()
      break
    default:
      break
  }
}
function iniciarMapa() {
  mapa.width = 450
  mapa.height = 350
  petPlayerObject = getObjectPet(petPlayer)
  console.log(petPlayerObject, petPlayer);
  intervalo = setInterval(pintarCanvas, 50)
  window.addEventListener('keydown', keyPressed)
  window.addEventListener('keyup', stopMove)
}
function getObjectPet() {
  for (let i = 0; i < mokepones.length; i++) {
    if (petPlayer === mokepones[i].nombre) {
      return mokepones[i]
    }
  }
}

window.addEventListener('load', startGame)