// -----------Arrays----------
/* let lista = ["texto 1", "texto 2", 2, 5, false, { nombre: "Germán", apellido: "Sánchez" },
    [1, 2]
];

console.log(lista);
console.log(lista[1]);
// llamar a un  objeto en un array
console.log(lista[5].nombre);
// llamar array dentro de array
console.log(lista[6][1]); */

// ----------Recorrer Array-----------
/* let lista = ["texto 1", "texto 2", 2, 5, false, { nombre: "German", apellido: "Sanchez" },
    [1, 2]
];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
} */

// --------Agregar elementos a Array (push)-----------
/* let listaSuper = ["manzana", "agua", "huevos", "yerba", "leche", "jabon"];
alert(listaSuper);

let productoNuevo = prompt("Cual es el elemento a agregar?");
listaSuper.push(productoNuevo);
alert(listaSuper); */

// -------Agregar elementos al principio de Array (unshift)----------
/* let listaSuper = ["manzana", "agua", "huevos", "yerba", "leche", "jabon"];

listaSuper.unshift("galletas");
alert(listaSuper); */

// ------------ Borrar primer elemento de Array(Shift)------------------
/* let listaSuper = ["manzana", "agua", "huevos", "yerba", "leche", "jabon"];

listaSuper.shift();
console.log(listaSuper); */

// ---------Borrar ultimo elemento de Array(Pop)---------------
/* let listaSuper = ["manzana", "agua", "huevos", "yerba", "leche", "jabon"];

listaSuper.pop();
console.log(listaSuper); */

// ------------Borrar elemento X (splice)-------------
/* let listaSuper = ["manzana", "agua", "huevos", "yerba", "leche", "jabon"];

listaSuper.splice(2, 1);
console.log(listaSuper); */

// -----------Generar un string con elementos de array (join)---------
/* let listaSuper = ["manzana", "agua", "huevos", "yerba", "leche", "jabon"];

console.log(listaSuper.join(" - ")); */

// -------------Concatenar/unir dos o más arrays (concat)----------
/* let listaSuper = ["manzana", "agua", "huevos", "yerba", "leche", "jabon"];
let listaFerreteria = ["martillo", "destornillador", "clavos"];

let listaEntera = listaSuper.concat(listaFerreteria);
console.log(listaEntera); */

// --------Agarrar parte del array (slice)-----------
/* let listaSuper = ["manzana", "agua", "huevos", "yerba", "leche", "jabon"];

let listaCorta = listaSuper.slice(2, 5);
console.log(listaCorta); */

// -------Obtener índice de elemento----------
/* let listaSuper = ["manzana", "agua", "huevos", "yerba", "leche", "jabon"];

console.log(listaSuper.indexOf("agua"));
console.log(listaSuper.indexOf("aceite"));

if (listaSuper.indexOf("aceite") == -1) {
  listaSuper.push("aceite");
  console.log(listaSuper.indexOf("aceite"));
}
console.log(listaSuper); */

// -----------Ejemplo de uso indexOf----------
/* let listaSuper = ["manzana", "agua", "huevos", "yerba", "leche", "jabon"];
console.log(listaSuper);

let posicionYerba = listaSuper.indexOf("yerba");
console.log(posicionYerba);
listaSuper.splice(posicionYerba, 1);
console.log(listaSuper); */

// -------------Ver si elemento existe en array (includes)---------
/* let listaSuper = ["manzana", "agua", "huevos", "yerba", "leche", "jabon"];

console.log(listaSuper.includes("agua"));
console.log(listaSuper.includes("aceite"));

if (!listaSuper.includes("uvas")) {
  listaSuper.push("uvas");
}
console.log(listaSuper); */

// ------------Inertir orden de elementos (reverse)------------
/* let listaSuper = ["manzana", "agua", "huevos", "yerba", "leche", "jabon"];

let listaInvertida = listaSuper.reverse;
console.log(listaInvertida); */

// -------------Ejemplo Arrays-----------
/* let notas = [];
let cantidad = 3;
do {
  let notaNueva = parseInt(prompt("Ingrese una nota"));
  notas.push(notaNueva);
  console.log(notas.length);
} while (notas.length != cantidad);

console.log(notas); */

// -----------Array de objetos-----------
/* class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

let listaProductos = [];

const agregarProd = () => {
  let nombre = prompt("Nombre del producto");
  let precio = parseFloat(prompt("Nombre del producto"));
  let prod = new Producto(nombre, precio);
  listaProductos.push(prod);
  console.log(listaProductos);
}; */

// ----------Recorrer array de objetos (For Of)----------
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

let listaProductos = [
  { nombre: "televisor", precio: "1000" },
  { nombre: "ventilador", precio: "500" },
];

const agregarProd = () => {
  let nombre = prompt("Nombre del producto");
  let precio = parseFloat(prompt("Nombre del producto"));
  let prod = new Producto(nombre, precio);
  listaProductos.push(prod);
  console.log(listaProductos);
};

for (let producto of listaProductos) {
  console.log(
    `Este producto es ${producto.nombre} y su precio es ${producto.precio}`
  );
}
