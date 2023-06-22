/* let parrafo = document.querySelector("#parrafo");
let boton = document.querySelector("#boton");
let inputTexto = document.querySelector("#texto");
let seleccion = document.querySelector("#select");

const escribir = () => {
  let texto = prompt("Qué texto desea agregar?");
  parrafo.innerHTML += texto;
};
 */
// ----------3 maneras de escuchar el evento-----------
// 1. addEventListener (EVENTO, FUNCION)
// boton.addEventListener("click", escribir);

// 2. Forma reducida - el metodo es el evento
/* boton.onclick = () => {
  escribir();
}; */

// 3. En el HTML (onclick="escribir()")

// ---------Eventos mecánicos----------
// 1. Eventos del mouse (click, mouseover, mouseout, mousemove)
/* boton.addEventListener("mouseover", () => {
  console.log("hola");
});
boton.addEventListener("mouseout", () => {
  console.log("chau");
});
boton.addEventListener("mousemove", () => {
  console.log("moveteee");
}); */

// 2. Eventos del teclado (onkeyup, onkeydown)
/* inputTexto.onkeydown = () => {
  console.log(inputTexto.value);
};
inputTexto.onkeyup = () => {
  console.log(inputTexto.value);
}; */

// ------------Eventos de lógica------------
// 1. change, onchange-
/* inputTexto.addEventListener("change", () => {
  console.log(`el nuevo valor es ${inputTexto.value}`);
});

seleccion.addEventListener("change", () => {
  console.log(seleccion.value);
}); */

// 2. input
/* inputTexto.addEventListener("input", () => {
  console.log(`el nuevo valor es ${inputTexto.value}`);
}); */

// ------------Evitar comportamiento default (prevent default)--------
/* let botonForm = document.querySelector("#botonForm");
botonForm.onclick = (e) => {
  e.preventDefault();
  alert("hice click");
}; */
let link = document.querySelector("#link");
link.onclick = (e) => {
  e.preventDefault();
  console.log(e);
  window.location.href = "https://www.mercadolibre.com.ar";
};
