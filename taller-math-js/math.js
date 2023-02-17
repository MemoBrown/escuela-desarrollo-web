const ladoCuadrado = 5
const perimetroCuadrado = ladoCuadrado * 4

const areaCuadrado = ladoCuadrado * ladoCuadrado

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
const alturaTriangulo = 5.5

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  }
}

function calcularAlturaTriangulo(lado, base) {
  if (lado == base) {
    console.warn("Este no es un triangulo isosceles")
  } else {
    // h = raizcuadrada(lado**2 - (b**2)/4)
    return Math.sqrt( (lado ** 2) - ( (base ** 2) ) / 4 ).toFixed(4)
  }
}

console.group("Circle")

const radioCirculo = 3
const diametroCirculo = radioCirculo * 2
// const PI = 3.1415

const circunferencia = diametroCirculo * PI
const areaCirculo = (radioCirculo ** 2) * PI

console.log({
  radioCirculo,
  diametroCirculo,
  circunferencia,
  areaCirculo
});

function calcularCirculo(radio) {
  const diametro = radio * 2
  const radioAlCuadrado = Math.pow(radio, 2)
  return {
    circunferencia: diametro * Math.PI.toFixed(2),
    area: radioAlCuadrado * Math.PI.toFixed(2)
  }
}

console.groupEnd("Circle")

function calcularAlturaTrianguloEscaleno(lado1, lado2, lado3) {
  if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.warn("Este no es un triangulo escaleno")
  } else {
    // h = 2/lado1 raizcuadrada(semiperimetro(semiperimetro - lado1) (semiperimetro - lado2) (semiperimetro - lado3))
    const semiperimetro = (lado1 + lado2 + lado3) / 2
    const altura = 2/lado1 * Math.sqrt(semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - lado3))
    return altura
  }
}