const obj = {
  123: 'Juanito Alcachofa',
  456: 'Juanita Alcaparra',
}

function solution(obj) {
  const arrayDeObjetos = Object.entries(obj).map(([id, name]) => ({ id, name }));
  console.log(arrayDeObjetos);

}

