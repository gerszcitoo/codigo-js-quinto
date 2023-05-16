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
    console.log(ingresarNumero + " x10 " + i + " = " + resultado);
} */

// ----------Turnos con for------
/* for (let i = 1; i <= 20; i++) {
    let nombre = prompt("Ingrese su nombre");
    console.log("Turno N°: " + i + "\nNombre: " + nombre);
} */

// --------Uso del break y continue-----------
/* for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
} */

// --------Recorrer Array dinámico (adelanto)--------
/* let nombres = ["Ger", "Maxi", "Hernán", "Matías"];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
} */

// -------------While----------
/* let repetir = true;
while (repetir) {
    console.log("Al infinito y más allá");
} */

/* let entrada = prompt("Ingresar un dato (Para salir escriba esc)");
while (entrada != "esc") {
    console.log(entrada);
    entrada = prompt("Ingrese una entrada (Para salir escriba esc)");
} */

// ---------Do While---------
/* let repetir = false;
do {
    console.log("solo una vez");
} while (repetir); */

/* let numero = 0;
do {
    numero = prompt("Ingrese un número");
    if (numero != "esc") {
        alert(numero);
    } else {
        alert("Usted salió del bucle");
    }
} while (numero != "esc"); */

// ------------Switch----------
/* let nombre = prompt("Ingrese su nombre");
while (nombre != "esc") {
    switch (nombre) {
        case "ana":
            console.log("El DNI de Ana es 14823294");
            break;
        case "marco":
            console.log("El DNI de Marcos es 33519294");
            break;
        case "ariel":
            console.log("El DNI de Ariel es 33519015");
            break;
        default:
            console.log("No tenemos ese dato");
            break;
    }
    nombre = prompt("Ingrese su nombre");

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
    } while (isNaN(numero1) || isNaN(numero2))

    switch (operacion) {
        case "+":
            alert(`El resultado de la suma es: ${numero1 + numero2}`);
            break;
        case "-":
            alert(`El resultado de la suma es: ${numero1 - numero2}`);
            break;
        case "*":
            alert("El resultado de la suma es: " + (numero1 * numero2));
            break;
        case "/":
            alert("El resultado de la suma es: " + (numero1 / numero2));
            break;
    }
    continuar = prompt("Desea continuar?");
} */