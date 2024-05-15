//ejercicio 3
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Ingresa una cadena de texto: ', (cadena) => {
  console.log(La cadena en mayúsculas es: ${cadena.toUpperCase()});
  rl.close();
});
