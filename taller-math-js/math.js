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