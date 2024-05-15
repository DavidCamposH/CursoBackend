// Ejercicio 6

let persona = [
    {nombre:"Sergio", edad: 33, cuidad: "San Salvador" },
    {nombre:"Martha", edad: 35, cuidad: "San Salvador" },
    {nombre:"Marleni", edad: 50, cuidad: "Santa Tecla" },
    {nombre:"Sonia", edad: 25, cuidad: "San Miguel" },

]

function buscarPorNombre(arrayPersona, nombre){
    return arrayPersona.find(objeto => objeto.nombre == nombre)
}

let personaBuscada = buscarPorNombre(persona, "Martha");
console.log(personaBuscada)