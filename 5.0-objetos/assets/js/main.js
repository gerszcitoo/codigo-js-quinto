/* // -------Repaso---------
function ingresarDatos() {
  let credito = parseInt(prompt("Ingrese el monto del crédito"));
  let meses = parseInt(prompt("Ingrese la cantidad de cuotas"));
  let banco = prompt("Ingrese un banco");
  let interes = calcInteres(banco);
  let cuota = calcCuota(credito, interes, meses);
  mostrar(banco, credito, interes, cuota, meses);
}
function calcCuota(credito, interes, meses) {
  let cuota = (credito * (1 + interes / 100)) / meses;
  return cuota.toFixed(2);
}
function calcInteres(banco) {
  switch (banco) {
    case "macro":
      return 27;
    case "santander":
      return 23;
    case "superville":
      return 20;
    default:
      return 0;
  }
}
function mostrar(banco, credito, interes, cuota, meses) {
  // -------imprimir en HTML--------
  document.write(
    `<h1>El crédito del banco ${banco}</h1> es de ${credito} 
    <br>Con un interés de ${interes}%
    <br>A pagar en cuotas de ${cuota} durante ${meses} meses`
  );
}
ingresarDatos(); */

// --------------Objetos y métodos------------
/* // Crear un objeto perro
const perro = {
  nombre: "Max",
  edad: 3,
  raza: "Labrador",
  ladrar: function () {
    console.log("¡Guau!");
  },
  comer: function () {
    console.log("¡Estoy comiendo!");
  },
};
// Acceder a las propiedades del perro
console.log(perro.nombre);
console.log(perro.edad);
// Llamar a los métodos del perro
perro.ladrar();
perro.comer(); */

//   -----Ejemplo 2 -----
/* const producto1 = {
  nombre: "televisor",
  precio: 120000,
  stock: 3,
};
const producto2 = {
  nombre: "heladera",
  precio: 125000,
  stock: 5,
};
console.log(producto1.nombre);
console.log(producto1["precio"]);
producto1.nombre = "Televisor 50 pulgadas";
console.log(producto1.nombre);
console.log(producto1);
 */
// ---------Constructores---------
function Producto(nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;
}

const producto1 = new Producto("televisor", 120000, 3);
console.log(producto1.nombre);
producto1.nombre = "Televisor 50 pulgadas";
console.log(producto1.nombre);
console.log(producto1);
