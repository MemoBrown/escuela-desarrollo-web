const MathLibrary = {}


MathLibrary.calcularPromedio = function calcularPromedio(lista) {
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

MathLibrary.esPar = esPar = (numberList) => {
  if (numberList.length % 2 == 0) {
    return true
  } else {
    return false
  }
}

MathLibrary.calcularMediana = function calcularMediana(listaDesordenada) {
  const listaOrdenada = MathLibrary.ordenarLista(listaDesordenada)
  const listaEsPar = MathLibrary.esPar(listaOrdenada)

  if (listaEsPar) {
    const numerosMitadLista = listaOrdenada.slice((listaOrdenada.length / 2) - 1, (listaOrdenada.length / 2) + 1).map(Number)
    const indexMitadListaPar = MathLibrary.calcularPromedio(numerosMitadLista)
    console.log(indexMitadListaPar);
  } else {
    const indexMitadListaImpar =  Math.floor(listaOrdenada.length / 2)
    const medianaImpar = listaOrdenada[indexMitadListaImpar]
    console.log(medianaImpar);
  }
}

MathLibrary.calcularModa = function calcularModa(lista) {
  const listaCount = {}

  for (let index = 0; index < lista.length; index++) {
    const element = lista[index];

    if (listaCount[element]) {
      listaCount[element] += 1
    } else {
      listaCount[element] = 1
    }
  }
  const listaArray = Object.entries(listaCount)
  const listaArrayOrdenada = ordenarListaBidimensional(listaArray, 1)
  const listaMaxNumber = listaArrayOrdenada[listaArrayOrdenada.length - 1]
  const moda = listaMaxNumber[0]
  return moda
  // console.log({listaArray, listaArrayOrdenada, listaMaxNumber});
  // console.log(`La moda es: ${listaMaxNumber[0]}`);
}

MathLibrary.ordenarLista = function ordenarLista(listaDesordenada) {
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

MathLibrary.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
  const listaOrdenada = listaDesordenada.sort((valorAcumulado, nuevoValor) =>
    valorAcumulado[i] - nuevoValor[i]
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
