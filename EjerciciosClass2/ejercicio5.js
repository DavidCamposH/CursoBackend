//Ejercicio 5
let sumarPar = 0
let numeros = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0; i<=numeros.length-1;i++){
    numeros[i] % 2 == 0 ? sumarPar += numeros[i] : sumarPar += 0 
}
console.log(sumarPar)