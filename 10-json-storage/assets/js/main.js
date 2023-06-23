// ---------LOCAL STORAGE (se guarda como KEY, VALOR)----------
/* let mensaje = "Bienvenidos a la clase 10";
localStorage.setItem("saludo", mensaje);

console.log(localStorage.getItem("saludo"));

let nombreUsuario = prompt("Ingrese su nombre");
localStorage.setItem("nombre", nombreUsuario); */

// --------SESSION STORAGE (solo guarda con la pestaña abierta)---------
/* sessionStorage.setItem("temporal", "esta es la clase de storage");

// Carrito entre distintos HTML y JS con LocalStorage
localStorage.setItem("carrito", "producto1"); */

// ----------BORRAR ITEMS------------
// borrar 1
/* localStorage.removeItem("saludo");
// borrar todos
localStorage.clear(); */

// ------------RECORRER STORAGE----------
// GET ITEM EN LOCAL SIEMPRE DEVUELVE STRING
/* localStorage.setItem("booleano", true);
localStorage.setItem("numero", 1000);
for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i);
  console.log(`clave: ${clave}, valor ${localStorage.getItem(clave)}`);
} */

// -----------JSON------------

/* let product1 = {
  nombre: "Guaymallen de fruta ",
  precio: 100,
};
// localStorage.setItem("producto1", product1);
// no funciona porque es objeto

// JSON
// CONVERTIR A JSON (convierte a string)- JSON.stringify(objeto o array)
localStorage.setItem("producto1", JSON.stringify(product1));
console.log(localStorage.getItem("producto1"));
// PARSEAR EL JSON (convierte de string a objeto)- JSON.parse(el json)
let miProducto = JSON.parse(localStorage.getItem("producto1"));
console.log(miProducto.nombre); */

// ----------EJEMPLO--------
class Mascota {
  constructor(nombre, tipo, edad) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.edad = edad;
  }
}

const listaMascotas = [];
// CON OPERADOR AVANZADO
// const listaMascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

const nuevaMascota = () => {
  const nombre = prompt("Cómo se llama la mascota?");
  const tipo = prompt("De qué tipo es la mascota?");
  const edad = prompt("Cuál es la edad de la mascota?");

  let mascotaNueva = new Mascota(nombre, tipo, edad);

  if (localStorage.getItem("mascotas") == null) {
    listaMascotas.push(mascotaNueva);
    localStorage.setItem("mascotas", JSON.stringify(listaMascotas));
  } else {
    const listaNueva = JSON.parse(localStorage.getItem("mascotas"));
    listaNueva.push(mascotaNueva);
    localStorage.setItem("mascotas", JSON.stringify(listaNueva));
  }
};
nuevaMascota();
