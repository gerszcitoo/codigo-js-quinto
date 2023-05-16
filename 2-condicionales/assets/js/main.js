/* valor1 = 10;
valor2 = "10";

valor1 = valor2; //valor1 pasará a ser 10
valor1 == valor2; //esto devolverá true
valor1 === valor2; //esto devolverá false */

// ---------Principios de if----------

/* let valor1 = 12;
let valor2 = 12;
let miVariable = valor1 == valor2; //valor es true
if (valor1 == valor2) {
  console.log("Entré en el if");
}
 */

/* let variable = false;
if (variable) {
  console.log("Entré en el if");
} else {
  console.log("No entré en el if");
} */

/* let variable;
if (!variable) {
  console.log("Entré en el if");
} else {
  console.log("Salió mal");
} */

// ------------Else dentro de if---------

/* let nombre = prompt("Ingrese un nombre");
if (nombre == "Gerson") {
  alert("Qué pelota Gerson");
} else {
  alert("Andá pa allá");
} */

// ------------SI variable está vacía, else-----------

/* let nombreUsuario = prompt("Ingresar nombre de usuario");
if (nombreUsuario == "") {
  alert("No ingresaste ningún nombre de usuario");
} else {
  alert("Bienvenido, " + nombreUsuario);
} */

// -----------If else anidados---------

/*let precio = prompt("ingrese un precio");
 if (precio < 20) {
  alert("El precio es menor a 20");
} else if (precio < 50) {
  alert("El precio es menor a 50");
} else if (precio < 100) {
  alert("El precio es menor a 100");
} else {
  alert("El precio es mayor o igual a 100");
} */

// -----------If separados-----------
/* if (precio < 20) {
  alert("El precio es menor a 20");
}
if (precio < 50) {
  alert("El precio es menor a 50");
}
 */
// ----------Comparación de tipos de datos
// -----------y operadores lógicos-------
/*let valor1 = 12;
let valor2 = 14;

 if (valor1 <= valor2) {
  console.log(valor1 + " es mayor o igual a " + valor2);
}

 if (valor1 === valor2) {
  console.log("son iguales");
} else {
  console.log("son distintos");
} 

if (valor1 !== valor2) {
  console.log("son distintos");
} */

// ---------------OPERADOR AND-----------------
/* let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
if (nombre != "" && apellido != "") {
  alert("Hola, " + nombre + " " + apellido);
} else {
  alert("Error al ingresar los datos");
} */

// --------------OPERADOR OR-----------
/* let nombre = prompt("Ingrese su nombre");
// ----------PASAR TODO A MINUSCULA----------
nombre = nombre.toLowerCase();

if (nombre == "ger" || nombre == "Ger" || nombre == "GER") {
  alert("Hola, Ger");
} */

// ------------------AND Y OR COMBINADOS------------------
/* let nombre = prompt("Ingrese su nombre");
nombre = nombre.toLowerCase();
let apellido = prompt("Ingrese su apellido");
apellido = apellido.toLowerCase();

if (apellido == "sanchez" && (nombre == "ger" || nombre == "german")) {
  alert("Hola, " + nombre + " " + apellido);
} */

// ----------------DESAFIO EN CLASE-----------
/* let numero = prompt("Ingrese un numero");
numero = parseFloat(numero);

if (numero > 1000) {
  alert("El número es mayor a 1000");
}
// ------
let texto = prompt("Ingrese un texto");

if (texto == "Hola") {
  console.log("El texto ingresado es Hola");
}
// -------
let numero1 = prompt("Ingrese un numero");
numero1 = parseFloat(numero1);

if (numero1 >= 10 && numero1 < 50) {
  alert("El número está entre 10 y 49");
}
 */
