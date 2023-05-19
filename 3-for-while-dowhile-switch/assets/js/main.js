// ----------For-----------
/* for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Sigue el código"); */

// ---------Tabla de multiplicar con For--------
// ---------Parsear Prompt en input-----------
/* let ingresarNumero = parseInt(prompt("Ingrese un número"));
let resultado;
for (i = 1; i <= 10; i++) {
  resultado = ingresarNumero * i;
  alert(ingresarNumero + " x " + i + " = " + resultado);
} */

// ----------Turnos con for----------
/* for (let i = 1; i <= 20; i++) {
  let nombre = prompt("Ingrese su nombre");
  alert("Turno N°: " + i + "\nNombre: " + nombre);
} */

// --------Uso del break y continue-----------
/* for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
} */

/* for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
} */

// --------Recorrer Array dinámico (adelanto)--------
/* let nombres = ["Germán", "Maxi", "Joaquín", "Martina"];
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
} */

// -------------While----------
/* let repetir = true;
while (repetir) {
  console.log("Al infinito y más allá");
} */

/* let entrada = prompt("Ingrese un dato (Para salir escriba esc)");
while (entrada != "esc") {
  alert(entrada);
  entrada = prompt("Ingrese un dato (Para salir escriba esc)");
} */

// ---------Do While---------
/* let repetir = false;
do {
  console.log("solo una vez");
} while (repetir); */

/* let numero = 0;
do {
  numero = prompt("Ingrese un número (Para salir escriba esc)");
  if (numero != "esc") {
    alert(numero);
  } else {
    alert("Usted salió del bucle");
  }
} while (numero != "esc"); */

// ------------Switch----------
/* let nombre = prompt("Ingrese su nombre (Para salir escriba esc)");
nombre = nombre.toLowerCase();
while (nombre != "esc") {
  switch (nombre) {
    case "ana":
      alert("El DNI de Ana es 14823294");
      break;
    case "marcos":
      alert("El DNI de Marcos es 33519294");
      break;
    case "ariel":
      alert("El DNI de Ariel es 33519015");
      break;
    default:
      alert("No tenemos ese dato");
      break;
  }
  nombre = prompt("Ingrese su nombre (Para salir escriba esc)");
  nombre = nombre.toLowerCase();
} */

// -----------Calculadora------------
/* let numero1, numero2, operacion, continuar;
while (continuar != "no") {
  do {
    numero1 = parseFloat(prompt("Ingrese un numero"));
    numero2 = parseFloat(prompt("Ingrese otro numero"));
    operacion = prompt("Ingrese una operación (+, -, *, /)");

    if (isNaN(numero1) || isNaN(numero2)) {
      alert("Por favor ingrese números válidos");
    }
  } while (isNaN(numero1) || isNaN(numero2));

  switch (operacion) {
    case "+":
      alert(`El resultado de la suma es: ${numero1 + numero2}`);
      break;
    case "-":
      alert(`El resultado de la suma es: ${numero1 - numero2}`);
      break;
    case "*":
      alert("El resultado de la suma es: " + numero1 * numero2);
      break;
    case "/":
      alert("El resultado de la suma es: " + numero1 / numero2);
      break;
  }
  continuar = prompt("Desea continuar?");
} */
