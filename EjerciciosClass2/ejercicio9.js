let listaCompra = {
    "Manzanas": 5,
    "Platanos": 3,
    "Elotes": 2,
    "Pan": 1,
}

function generarListCompra(listaCompra){
let listaLegible = "Lista de compras: \n"
for(let elemento in listaCompra){
    listaLegible += ${elemento} : ${listaCompra[elemento]} unidades \n
    
}
return listaLegible
}

let listaLegible = generarListCompra(listaCompra)
console.log(listaCompra);