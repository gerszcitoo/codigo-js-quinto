// -----------Funciones----------
/* function saludar() {
  console.log("Hola estudiantes!");
}

saludar(); */

// ----------Ejemplo de funciones-------
/* function ingresarNombre() {
  let nombre = prompt("Ingresar nombre");
  alert("el nombre ingresado es: " + nombre);
}

for (let i = 0; i <= 4; i++) {
  ingresarNombre();
} */

// ---------Función con parámetros--------
/* function conParametros(parametro1, parametro2) {
  console.log(
    `El parámetro 1 es: ${parametro1} \nEl parámetro 2 es: ${parametro2}`
  );
}

conParametros("hola", "et24");
conParametros("aprendiendo", "js");
conParametros(12, 15); */

// --------Uso de Return--------

/* let resultado = 0;
function suma(numero1, numero2) {
  return numero1 + numero2;
}
function mostrar(mensaje) {
  console.log(mensaje);
}
resultado = suma(12, 3);
mostrar(resultado); */

// -----------Ejemplos return-----------

/* function calculadora(numero1, numero2, operacion) {
  switch (operacion) {
    case "+":
      return numero1 + numero2;
      // con return la funcion termina, no es necesario un break
      break;
    case "-":
      return numero1 - numero2;
    case "*":
      return numero1 * numero2;
    case "/":
      return numero1 / numero2;
  }
}
console.log(calculadora(12, 12, "+")); */

// ---------Ejemplo variables globales y locales----------
/* // variable global
let resultado = 0;
function sumar(primerNumero, segundoNumero) {
  // variable local
  let resultado;
  resultado = primerNumero + segundoNumero;
  console.log(resultado);
}
sumar(5, 6);
console.log(resultado); */
// --------------Ejemplo de funcines locales-----------
// primero busca variable en la función, después en el padre
/* let nombre = "Tiago";

function practica() {
  let nombre = "Julio";
  if (true) {
    let nombre = "Germán";
    console.log(nombre);
  }
}
practica(); */

// -----------Funciones anónimas-----------
// no tienen nombre, se suelen almacenar en constantes
/* const SUMA = function (a, b) {
  console.log(a + b);
};
// SUMA(5, 5);
// console.log(SUMA);
const RESTA = function (a, b) {
  return a - b;
};
// RESTA(8, 2);
console.log(RESTA); */

// -------------Función flecha-----------
// si es en misma linea no necesita return ni llaves
/* const SUMA = (a, b) => a + b;
const RESTA = (a, b) => a - b;
// si tiene un solo parametro se pueden obviar los parentesis
const IVA = (a) => a * 0.21;
let precioProducto = 500;
let descuento = 50;
let precioFinal = RESTA(SUMA(precioProducto, IVA(precioProducto)), descuento);
console.log(precioFinal); */

// -------------Adelanto----------

/* let saludar = document.getElementById("saludar");
saludar.addEventListener("click", function () {
  alert("hola");
}); */
