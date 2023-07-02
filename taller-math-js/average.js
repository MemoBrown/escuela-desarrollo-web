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
  const sumaLista = lista.reduce((valorAcumulado, valorActual) => valorAcumulado + valorActual)

  const average = sumaLista / lista.length

  console.log(average);
}

