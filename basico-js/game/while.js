var estudiantes = ['Maria', 'Guillermo', 'Gaby', 'Sergio'];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`)
};

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

// (4) ["Maria", "Guillermo", "Gaby", "Sergio"]
//  Hola, Maria
// (3) ["Guillermo", "Gaby", "Sergio"]
//  Hola, Guillermo
// (2) ["Gaby", "Sergio"]
//  Hola, Gaby
// ["Sergio"]
//  Hola, Sergio
// undefined