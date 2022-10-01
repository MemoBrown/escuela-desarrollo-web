const h1 = document.querySelector('h1')
const parrafo = document.querySelector('.p-class')
const pid = document.querySelector('#p-id')
const input = document.querySelector('input')
console.log(input);

// h1.innerHTML = "Prueba de innerHTML <a href='#'>Link</a>"
// h1.innerText = "Prueba de innerHTML <a href='#'>Link</a>"
// h1.getAttribute('')
h1.setAttribute("class", 'red')
h1.classList.add('title')

input.value = "456"
input.placeholder = "45689"

const image = document.createElement("img");
image.setAttribute("src", "https://static.platzi.com/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png")

console.log(image);
pid.innerHTML = ""
pid.append(image)