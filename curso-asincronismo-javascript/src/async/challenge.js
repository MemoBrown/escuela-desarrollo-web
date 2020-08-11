const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
  try{
    const data = await fetchData(url_api)
    const character = await fetchData(`${API}${data.results[0].id}`);
    const character2 = await fetchData(`${API}${data.results[1].id}`);
    const character3 = await fetchData(`${API}${data.results[2].id}`);
    const origin = await fetchData(character.origin.url);
    console.log(`Existen ${data.info.count} personajes en Rick and Morty con fecha ${Date()}`);
    console.log(`Nombre: ${character.name}`);
    console.log(`Especie: ${character.species}`);
    console.log(`Estado: ${character.status}`);
    console.log(`Genero: ${character.gender}`);
    console.log(`Dimensión: ${origin.dimension}`);
    console.log(character3.name);
  }catch(error){
    console.error(error);
  }
}

console.log('Before');
anotherFunction(API);
console.log('After');