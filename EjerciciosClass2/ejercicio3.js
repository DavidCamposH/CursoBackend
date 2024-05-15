
// Ejercicio 3
let persona = [
    {nombre:"Sergio", edad: 33, cuidad: "San Salvador" },
    {nombre:"Martha", edad: 35, cuidad: "San Salvador" },
    {nombre:"Marleni", edad: 50, cuidad: "Santa Tecla" },
    {nombre:"Sonia", edad: 25, cuidad: "San Miguel" },

]

function filtrarPersonas(personaObjeto, cuidad){
    return personaObjeto.filter(persona => persona.edad > 30 && persona.cuidad === cuidad)
}

let personasFiltradas = filtrarPersonas(persona, "San Salvador")
console.log(personasFiltradas)