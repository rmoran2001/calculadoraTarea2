
//Integrantes 
//Eduardo Leal
//Diego Hernandez
//Rudy Morán 


const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const dividir = (a, b) => b === 0 ? 'Error: División por cero no es permitida' : a / b;

const a = 5;
const b = 5;

console.log(`La suma de ${a} + ${b} es`, suma(a, b));
console.log(`La resta de ${a} - ${b} es`, resta(a, b));
console.log(`La multiplicación de ${a} * ${b} es`, multiplicacion(a, b));
console.log(`La división de ${a} / ${b} es`, dividir(a, b));
