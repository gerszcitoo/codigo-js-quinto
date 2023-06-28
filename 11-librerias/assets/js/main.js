/* // ------Detectar click en una card-------
let botones = document.querySelectorAll(".btn"); //trae un array

for (let boton of botones) {
  boton.onclick = (e) => {
    agregarCarrito(e);
  };
}

let carrito = [];

function agregarCarrito(e) {
  let elemento = e.target;
  // uso e.target para saber qué boton traigo
  let padre = elemento.parentElement; //busco al elemento padre
  console.log(padre);
  let nombre = padre.querySelector("h2").innerText;
  let precio = padre.querySelector("p").innerText;
  alert(`Nombre: ${nombre}, Precio: ${precio}`);
  let producto = {
    nombre: nombre,
    precio: precio,
  };

  carrito.push(JSON.stringify(producto));

  localStorage.setItem("carrito", carrito);

  // se puede crear objeto
  // let producto = new Productos(nombre, precio)
} */

// -------------Parte 2------------
// ----------LIBRERIAS------------

// --------SWEET ALERT (alertas)----------

let boton = document.getElementById("btnSend");

boton.addEventListener("click", () => {
  //pedirle al usuario datos
  // crear un objeto
  // agregar el objeto al array o al storage
  let nombre = document.getElementById("nombre").value;
  Swal.fire(`Tu producto fue agregado, ${nombre}`);
});

// ---------TOASTIFY (mensaje)---------

let tostadas = document.getElementById("toast");

tostadas.addEventListener("click", () => {
  Toastify({
    text: "Probando Toast!",
    duration: 3000,
    // destination: "https://google.com",
    newWindow: true,
    close: true,
    gravity: "top", // "top" o "bottom"
    position: "right", // "left", "center" o "right"
    stopOnFocus: true, // Previene que se vaya si está el mouse encima
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    // toast dentro de toast
    onClick: () => {
      Toastify({
        text: "Hiciste click en el toast!",
        duration: 3000,
      }).showToast();
    }, // Callback after click
  }).showToast();
});
