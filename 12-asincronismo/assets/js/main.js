// -----------------------ASINCRONÍA-------------------------
// ----------set time out (ejecutar tras x tiempo)------------
/* console.log("Bienvenidos");
console.log("====================");

setTimeout(() => {
  console.log("Estamos aprendiendo JavaScript");
  console.log("====================");
}, 1000);

console.log("Esta es la clase de asincronía"); */

// ---------set interval (repetir algo)--------------
/* setInterval(() => {
  console.log("tic");
}, 2000); */

// ---------clear interval (frenar interval)-------------

/* let contador = 0;
let intervalo = setInterval(() => {
  contador++;
  console.log(`Pasaron ${contador} segundos`);

  if (contador >= 10) {
    clearInterval(intervalo);
    console.log("Terminé de contar");
  }
}, 1000); */

// ----------clear timeout (cancelar timeout)-----------
/* console.log("inicio");

const fin = setTimeout(() => {
  console.log("fin");
}, 2000);
// nunca se ejecuta porque se cancela */

// ------------------------PROMESAS---------------------------

//CON TIMEOUT
/* const promesa = new Promise((resolve, reject) => {
  let num = Math.floor(Math.random() * 10);
  setTimeout(() => {
    num > 5
      ? resolve(console.log(num))
      : reject(new Error("El número es menor a 5"));
  }, 1000);
}); */

//CON INTERVAL
/* const promesa = new Promise((resolve, reject) => {
  setInterval(() => {
    let num = Math.floor(Math.random() * 10);
    num > 5
      ? resolve(console.log(num))
      : reject(console.log("El número es menor a 5"));
  }, 1000);
}); */

// -----------Then y Catch------------
/* const promesa = new Promise((resolve, reject) => {
  let num = Math.floor(Math.random() * 10);
  setTimeout(() => {
    num > 5 ? resolve(num) : reject(new Error("El número es menor a 5"));
  }, 1000);
});

promesa
  // THEN RECIBE EL RESOLVE DE LA PROMESA
  // .then (resolve => funcion)
  .then((number) => console.log(`El número elegido es ${number}`))
  // CATCH RECIBE EL ERROR DE LA PROMESA
  // .catch (reject => funcion)
  .catch((error) => console.log(error))
  .finally(() => console.log("Fin del proceso")); */

// --------------EJEMPLO----------------
// (usar promesas para cargar contenido pesado mas tarde)
const llamarProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listaProductos);
    }, 3000);
  });
};

let contenedor = document.querySelector("#productos");

const mostrarProductos = (array) => {
  array.forEach((producto) => {
    contenedor.innerHTML += `
        <div id="producto">
            <h3>${producto.title}</h3>
            <p>${producto.description}</p>
            <p>$${producto.price}</p>

        </div>
        `;
  });
};

llamarProductos().then((respuesta) => {
  mostrarProductos(respuesta);
});
