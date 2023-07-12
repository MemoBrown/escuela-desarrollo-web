//Análisis personal de Juanita
// const personSearched = "Juanita"
// const person = salaries.find((person) => { // name, jobs
//   return person.name == personSearched
// })

const findPerson = (personSearched) => {
  const person = salaries.find((person) => {
    return person.name == personSearched
  })
  return person
}

const medianaPorPersona = (personName) => {
  const jobs = findPerson(personName).jobs
  
  const listSalaries = jobs.map((job) => {
    return job.salary
  })
  
  const medianaSalary = MathLibrary.calcularMediana(listSalaries)

}
