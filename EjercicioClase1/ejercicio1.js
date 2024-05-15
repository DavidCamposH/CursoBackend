//Determinar si un número ingresado por el usuario es positivo, negativo o si es cero

const readline = require ('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.question("ingrese un numero: " , (numero) => {

    if (numero >= 1 ){
       return console.log(`el numero ${numero} es positivo` )
    } else if (numero <= -1){
       return  console.log(`el numero ${numero} negativo` )
    }else {
         return console.log ("el numero es 0")
    }
});
