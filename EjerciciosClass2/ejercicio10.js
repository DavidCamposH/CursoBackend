let estudiantes = [
    { nombre: "Juan", edad: 20, grado: 10 },
    { nombre: "María", edad: 19, grado: 11 },
    { nombre: "Pedro", edad: 18, grado: 12 }
];

let profesores = [
{nombre: "Juan", Materia : "Matemticas"},
{nombre: "Medardo", Materia : "Lenguaje"},
{nombre: "Antonio", Materia : "Ciences"}

]

function combinarObjetos (a,b){
let comunidadEducativa = [...a,...b]
return comunidadEducativa
}

let comunidad = combinarObjetos(estudiantes, profesores)
console.log(comunidad)