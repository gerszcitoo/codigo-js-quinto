// EJEMPLOS DE VARIABLES

/* let numero = 15;
let numero2 = 20;
const ANIO = 1987;
// ANIO = 2; esto no se puede
let numeroProducto = 12;
console.log(numero);
console.log(numero2);
numero2 = 21;
console.log(numero2);
console.log(ANIO); */

// ------------------
// OPERACIONES CON NUMEROS

/* let numero1 = 120;
let numero2 = 20;
const NUMERO3 = 10;
let numeroVeinte = "20";
let resultadoSuma = numero1 + numero2; //140
let resultadoResta = numero1 - numero2; //100
let resultadoMulti = numero1 * NUMERO3; //1200
let resultadoDivi = numero1 / numero2; //6
let resultadoFinal = resultadoSuma + resultadoResta + resultadoMulti + resultadoDivi;
console.log(resultadoFinal); //1446 */

// OPERACIONES CON TEXTO
/* let texto1 = "Hola,";
let nombre = "Germán";
const SPC = " ";
let saludo = texto1 + SPC + nombre;
console.log(saludo);
nombre = "Hernán";
saludo = texto1 + SPC + nombre;
console.log(saludo); */

// ------------------
//ALERT, PROMPT Y PARSE

let nombre = prompt("Ingrese su nombre");
alert("Hola, " + nombre);
let numero1 = prompt("Por favor ingrese un número");
let numero2 = prompt("Ingrese otro número");
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
let resultadoSuma = numero1 + numero2;
alert("El resultado es: " + resultadoSuma);


/* let nombre = prompt("Ingrese su nombre");
console.log("Hola, " + nombre);

let numero1 = prompt("Ingrese un número");
numero1 = parseFloat(numero1);
let numero2 = 150;
let resultadoSuma = numero1 + numero2;
console.log("Su número ingresado + 150 es igual a :" + resultadoSuma);

let texto = prompt("Ingrese un texto");
let texto2 = prompt("Ingrese otro texto");
console.log(texto + texto2); */
