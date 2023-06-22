// ---------Métodos de acceso a los nodos-----------
// 1. Por ID - trae un OBJETO
/* let titulo = document.getElementById("titulo");
console.log(titulo); */

// 2. Por clase - trae un ARRAY
/* console.log(document.getElementsByClassName("parrafo"));
// Traer un objeto del array
console.log(document.getElementsByClassName("parrafo")[0]); */

// 3. Por etiqueta - trae un ARRAY
// console.log(document.getElementsByTagName("h2"));

// 4. Selectores - IGUAL que en CSS - SÓLO el PRIMER OBJETO que encuentra
/* console.log(document.querySelector("#parrafo"));
// Traer más de un objeto - trae un ARRAY
console.log(document.querySelectorAll("#titulo"));
console.log(document.querySelectorAll("div > form"));
console.log(document.querySelectorAll(".parrafo"));
console.log(document.querySelectorAll("p")); */

// ---------Acceder a contenido de etiqueta (innerText)---------
/* let titulo = document.getElementById("titulo");
console.log(titulo.innerText);
titulo.innerText = "Hola Mundo"; */

// --------Ejemplo Array con nodos---------
/* let listaParrafos = document.querySelectorAll("p");

for (let materia of listaParrafos) {
  console.log(`Esta materia es ${materia.innerText}`);
} */

// ------Cambiar contenido de etiqueta-----------
/* let titulo = document.getElementById("titulo");
titulo.innerText = "Cambio de texto";
titulo.innerHTML = "<strong>agrego HTML</strong>"; */

// ------Cambiar CSS desde JS---------
/* let titulo = document.getElementById("titulo");
titulo.style.color = "red";
titulo.style.textAlign = "center";
titulo.style.display = "none"; */

// ------Agregar Clase---------
/* let titulo = document.getElementById("titulo");
titulo.className = "titulo"; */

// ------Cambiar atributos-------
/* let titulo = document.getElementById("titulo");
titulo.setAttribute("class", "titulo1");
let link = document.querySelector("a");
link.setAttribute("href", "https://www.google.com");
link.setAttribute("target", "blank_"); */

// ----------Agregar y sacar HTML-----------
/* let subtitulo = document.createElement("h2");
subtitulo.setAttribute("id", "nuevoElemento");
subtitulo.innerHTML = `<a href="">Este es un link</a>`;
console.log(subtitulo);

document.getElementById("aca").appendChild(subtitulo);
document.getElementById("aca").removeChild(subtitulo); */

// -----------Leer Input----------
/* // escribir input
document.getElementById("nombre").value = "Nombre";
// leer input
console.log(document.getElementById("nombre").value); */

// ---------Puesta en práctica---------
class Producto {
  constructor(nombre, categoria, precio) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
  }
}

let listaProductos = [
  { nombre: "televisor", categoria: "electro", precio: 2000 },
  { nombre: "lavarropas", categoria: "electro", precio: 5000 },
  { nombre: "tostadora", categoria: "electro", precio: 100 },
];

const agregarProducto = () => {
  let nombre = document.querySelector("#nombre").value;
  // let nombre2 = document.querySelectorAll("#nombre")[0].value;
  let categoria = document.querySelector("#categoria").value;
  let precio = parseFloat(document.querySelector("#precio").value);

  let productoNuevo = new Producto(nombre, categoria, precio);
  listaProductos.push(productoNuevo);
  return productoNuevo;
};

listaProductos.forEach((el) => {
  let nodo = document.createElement("div");
  nodo.className = "producto";
  nodo.setAttribute("id", el.nombre);
  nodo.innerHTML = `<h3>${el.nombre}</h3>
                    <p>${el.categoria}</p>
                    <p>${el.precio}</p>`;
  document.getElementById("productos").appendChild(nodo);
});
