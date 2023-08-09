// ---------------FETCH-------------------
const boton = document.querySelector("#btn");
const contenedor = document.querySelector("#fetch");

/* const obtenerDatos = () => {
  fetch("./datos.txt")
    // convierte la respuesta en texto legible
    .then((response) => response.text())
    // se muestra en el contenedor
    .then((response) => (contenedor.innerHTML = response))
    // en caso de error
    .catch((error) => console.log(error));
};

boton.onclick = () => {
  obtenerDatos();
}; */

/* const obtenerDatos = () => {
  fetch("./datos.json")
    // convierte a json legible la respuesta
    .then((response) => response.json())
    .then((response) => {
      let datos = response;
      datos.forEach((persona) => {
        contenedor.innerHTML += `
                <div>
                    <h3>${persona.nombre}</h3>
                    <p>Edad: ${persona.edad}</p>
                    <p>Ocupación: ${persona.ocupacion}</p>
                </div>
                `;
      });
    })
    .catch((error) => console.log(error));
};
boton.onclick = () => {
  obtenerDatos();
}; */

/* const obtenerDatos = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((response) => {
      let datos = response;
      datos.forEach((post) => {
        contenedor.innerHTML += `
                <div id="${post.id}">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
                `;
      });
    })
    .catch((error) => console.log(error));
};
boton.onclick = () => {
  obtenerDatos();
}; */

// -------Async Await (indica funcion asincrónica)---------

const obtenerDatos = async () => {
  // el try ejecuta el código dentro
  try {
    // el await espera al fetch
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // el await espera la response
    let resultado = await response.json();
    resultado.forEach((post) => {
      contenedor.innerHTML += `
        <div id="${post.id}">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
        `;
    });
    // si falla el try, el catch muestra el error
  } catch (error) {
    console.log(error);
  }
};

boton.onclick = () => {
  obtenerDatos();
};
