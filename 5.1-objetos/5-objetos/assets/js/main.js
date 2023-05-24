// --------------Metodos-----------
/* function Producto(nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;
  this.iva = function() {
    this.precio = this.precio * 1.21;
  }
}
const producto1 = new Producto("televisor", 120000, 3);
console.log(producto1.precio);
producto1.iva()
console.log("Precio con IVA: " + producto1.precio); */
// ---------Métodos-------
/* let cadena = "HOLA ET24";

console.log(cadena.length);

console.log(cadena.toLowerCase);
console.log(cadena.toUpperCase); */

// ---------In y For In--------
/* function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.iva = function() {
        this.precio = this.precio * 1.21;
    }
}
const producto1 = new Producto("televisor", 120000, 3);
producto1.iva()
producto1.nombre = "Televisor 50 pulgadas";
// IN
console.log("nombre" in producto1);
// FOR IN
for (const prop in producto1) {
    console.log(producto1[prop]);
} */

// ---------Clases y metodos (ejemplo)---------
/* class Producto {
    constructor(nombre, precio) {
            this.nombre = nombre.toUpperCase();
            this.precio = precio;
            this.vendido = false;
        }
        // Los metodos solo se llaman desde el objeto padre
    iva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("Arroz", 125);
const producto2 = new Producto("fideos", 50);
producto1.iva();
producto2.iva();
producto1.vender();
// FOR IN
for (const prop in producto1) {
    console.log(producto1[prop]);
} */

// --------------EJEMPLO DE LA CLASE--------------

/* class Usuario {
  constructor(nombre, apellido, id) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.id = id;
  }
  imprimir(objeto) {
    for (const clave in objeto) {
      alert(`${clave}: ${objeto[clave]}`);
    }
  }
}

class Mascota {
  constructor(nombre, responsable, tipo, edad, vacunas) {
    this.nombre = nombre;
    this.responsable = responsable;
    this.tipo = tipo;
    this.edad = edad;
    this.vacunas = vacunas;
  }
  imprimir(objeto) {
    for (const clave in objeto) {
      alert(`${clave}: ${objeto[clave]}`);
    }
  }
}

alert("Te damos la bienvenida al Sistema de Registro Animal");
let usuarioRegistrado = {};
let mascotaRegistrada = {};
let salida = false;
while (salida != true) {
  let nombreMascota = prompt("Ingrese el nombre de su mascota");
  alert("Le pediremos datos a su dueño!");
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let id = prompt("Ingrese su DNI");
  alert("Perfecto, sigamos con su mascota");
  let tipoMascota = prompt("Ingrese la raza de su mascota");
  let edadMascota = prompt("Ingrese la edad de su mascota");
  let vacunasMascota = prompt("Está vacunada su mascota? Si/no");
  usuarioRegistrado = new Usuario(nombre, apellido, id);
  mascotaRegistrada = new Mascota(
    nombreMascota,
    id,
    tipoMascota,
    edadMascota,
    vacunasMascota
  );
  salida = confirm("Los datos ingresados son correctos?");
}
let verMascota = confirm("Quiere ver los datos de la mascota?");
if (verMascota) {
  usuarioRegistrado.imprimir(mascotaRegistrada);
}
let verUsuario = confirm("Quiere ver los datos del usuario?");
if (verUsuario) {
  usuarioRegistrado.imprimir(usuarioRegistrado);
}
 */
