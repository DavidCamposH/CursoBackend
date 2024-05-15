// Ejercicio 8

function validarObjetos(objeto){
    const propiedades = ['nombre' , 'direccion' , 'telefono'];
    for(let propiedad of propiedades){
        if(objeto.hasOwnProperty(propiedad)){
            let mjs = "Objeto Aprobado"
            return mjs
        }else{
            let mjs = "Objeto No Aprobado"
            return mjs
        }
    }
    }
    
    let cliente = {nombre: "william" , direccion: "San Miguele", telefono: 7427328}
    console.log(validarObjetos(cliente))