function newFunction(name, age, country){
    var name = name || 'Guillermo';
    var age = age || 28;
    var country = country || 'MX'
    console.log(name, age, country);
}

// es6

function newFunction2(name = 'Guillermo', age = 28, country = 'MX'){
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'CO');

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// LET y CONST, Multilínea, Spread Operator y Desestructuración
let lorem = 'Anim adipisicing cillum voluptate ea nostrud excepteur cillum culpa. \n'
+ 'otra frase en multilinea'

//es6
let lorem2 = `Otra frase que se necesita
ahora es otra frase con salto de linea
`;

console.log(lorem)
console.log(lorem2)

//--------------------------
let person = {
    'name': 'Guillermo',
    'age': 28,
    'country': 'MX'
}
console.log(person.name, person.age)
//es6
let {name, age, country} = person;
console.log(name, age, country);

//------------------------
let team1 = ['Memo', 'Gaby', 'Sergio'];
let team2 = ['Ale', 'Sara', 'Bruno'];

let education = ['David', ...team1, ...team2];

console.log(education)

//----------------
{
    var globalVar = 'Global Var'
}

{
    let globalLet = 'Global Let'
}

console.log(globalVar)
console.log(globalLet)

const a = 'b';
a = 'a'
console.log(a)

// Arrow Functions, Promesas y Parámetros en objetos

let name = 'Guillermo';
let age = 28;
//es5
obj = {name: name, age: age};
// es6
obj2 = {name, age};
console.log(obj2);

// -------------------
const names = [
    {name: 'Guillermo', age: 28},
    {name: 'Gabriela', age: 24}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!')
        } else{
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))



class calculator {
constructor(){
    this.valueA = 0;
    this.valueB = 0;
}
sum(valueA, valueB){
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB
}
}

const calc = new calculator();
console.log(calc.sum(2, 2));

import { hello } from './module';

hello();

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};
 const generatorHello = helloWorld();
 console.log(generatorHello.next().value);
 console.log(generatorHello.next().value);
 console.log(generatorHello.next().value);