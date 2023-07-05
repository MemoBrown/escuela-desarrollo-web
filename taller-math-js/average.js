function calcularPromedio(lista) {
  // sumar todos los elementos del array / cantidad de elementos
  // let sumaLista = 0

  // for (let index = 0; index < lista.length; index++) {
  //   sumaLista = sumaLista + lista[index];
  // }
  
  // function elementsSum(valorAcumulado, valorActual) {
  //   return valorAcumulado + valorActual
  // }
  // const elementsSum = (valorAcumulado, valorActual) => {
  //   return valorAcumulado + valorActual
  // }
  const sumaLista = lista.reduce((valorAcumulado, valorActual) => valorAcumulado + valorActual) // En este ejemplo esta recibien una arrow function anonima

  const average = sumaLista / lista.length

  console.log(average);
}

const esPar = (numberList) => {
  if (numberList.length % 2 == 0) {
    return true
  } else {
    return false
  }
}

console.log(esPar);

function calcularMediana(listaMediana) {
  const listaEsPar = esPar(listaMediana)

  if (listaEsPar) {
    const numerosMitadLista = listaMediana.slice((listaMediana.length / 2) - 1, (listaMediana.length / 2) + 1).map(Number)
    const indexMitadListaPar = calcularPromedio(numerosMitadLista)
    console.log(indexMitadListaPar);
  } else {
    const indexMitadListaImpar =  Math.floor(listaMediana.length / 2)
    const medianaImpar = listaMediana[indexMitadListaImpar]
    console.log(medianaImpar);
  }
}