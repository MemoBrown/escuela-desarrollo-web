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

function calcularMediana(listaDesordenada) {
  const listaOrdenada = ordenarLista(listaDesordenada)
  const listaEsPar = esPar(listaOrdenada)

  if (listaEsPar) {
    const numerosMitadLista = listaOrdenada.slice((listaOrdenada.length / 2) - 1, (listaOrdenada.length / 2) + 1).map(Number)
    const indexMitadListaPar = calcularPromedio(numerosMitadLista)
    console.log(indexMitadListaPar);
  } else {
    const indexMitadListaImpar =  Math.floor(listaOrdenada.length / 2)
    const medianaImpar = listaOrdenada[indexMitadListaImpar]
    console.log(medianaImpar);
  }
}

function ordenarLista(listaDesordenada) {
  const listaOrdenada = listaDesordenada.sort((valorAcumulado, nuevoValor) =>
    valorAcumulado - nuevoValor
    // if (valorAcumulado > nuevoValor) {
    //   return 1
    // } else if (valorAcumulado == nuevoValor) {
    //   return 0
    // } else if (valorAcumulado < nuevoValor) {
    //   return -1
    // }
  )

  return listaOrdenada
}