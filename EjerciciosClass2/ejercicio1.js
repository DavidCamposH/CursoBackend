// Ejercicio 1

function contarPalabras(array){
    let contadorPalabras = {}
    array.forEach(cadena => {
        let palabras = cadena.split(/\s+/);
        palabras.forEach(palabra=>{
            if(contadorPalabras[palabra]){
                contadorPalabras[palabra]++
            }
            else{
                contadorPalabras[palabra]=1
            }
        })
    });
    return contadorPalabras;
}

let palabrasArray = ["hola buenos dias", "hola buenos tardes", "hola buenos noches"]
let result = contarPalabras(palabrasArray)
console.log(result)
