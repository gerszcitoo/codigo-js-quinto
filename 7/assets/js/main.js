// -----------Funciones de orden superior-----------
// -----------Función que retorna función-----------
/* function mayorQue(numero) {
    return (numeroaEvaluar) => numeroaEvaluar > numero;
}

let mayorQueDiez = mayorQue(10);
let mayorQueCien = mayorQue(100);

console.log(mayorQueDiez(6));
console.log(mayorQueCien(200)); */

// ----------Recibir funciones por parámetro---------
/* function porCadaElemento(array, funcion) {
    for (const elemento of array) {
        funcion(elemento);
    }
}

let nombres = ["Juan", "María", "Mariano", "Patricia"];
let numeros = [4, 6, 9, 2];
porCadaElemento(nombres, console.log);
porCadaElemento(numeros, console.log); */

// -------------------
/* let total = 0;

function acumular(num) {
    total += num;
    console.log(total);
    return total;
}
// console.log(porCadaElemento(numeros, acumular)); */

// --------------Con funcion anonima-----------
/* function porCadaElemento(array, funcion) {
    for (const elemento of array) {
        funcion(elemento);
    }
}
let numeros = [4, 6, 9, 2];

const numerosPor2 = [];
porCadaElemento(numeros, (el) => {
    numerosPor2.push(el * 2);
});

console.log(numerosPor2); */

// -------------Métodos de búsqueda y transformación-------------

let listaProductos = [
    { nombre: "televisor", precio: 1000 },
    { nombre: "computadora", precio: 2000 },
    { nombre: "computadora", precio: 3000 },
    { nombre: "ventilador", precio: 5000 },
    { nombre: "tostadora", precio: 200 },
    { nombre: "estufa", precio: 1500 },
];

// ------FOR EACH---------
/* listaProductos.forEach(producto => {
    console.log(`Este objeto es ${producto.nombre} y su precio es ${producto.precio}`)
}); */

// -------FIND (sólo trae el PRIMERO que encuentre, trae OBJETO)--------
/* let busquedaUsuario = prompt("Qué desea buscar?");
let buscar = listaProductos.find(producto => producto.nombre == busquedaUsuario);
console.log(buscar); */

// ---------FILTER (devuelve todos los que enecuentra, trae ARRAY)---------
/* let buscaPrecio = listaProductos.filter(prod => prod.precio > 2000);

console.log(buscaPrecio); */

// ------------SOME (devuelve un booleano)----------
/* let existeProducto = listaProductos.some(prod => prod.nombre == "computadora");
console.log(existeProducto); */

// -----------MAP (copiar array)----------
/* let productosIva = listaProductos.map(prod => prod.precio = prod.precio * 1.21);
console.log(productosIva); */

// -----------REDUCE (sumatoria total)----------
/* let totalCompra = listaProductos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log(totalCompra); */

// ----------SORT (ordenar)----------
/* const animales = ["elefante", "perro", "leon", "camello"];
const numeros = [40, 1, 5, 200];
console.log(animales.sort());
console.log(numeros.sort((a, b) => a - b));
console.log(numeros.sort((a, b) => b - animales));
// Ordenar alfabéticamente
console.log(listaProductos.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return 1
    }
    if (a.nombre < b.nombre) {
        return -1
    }
    return 0;
})); */

// -----------Objeto MATH (Trabajar con matemática)-----------
// console.log(Math.E);
// -----------Objeto DATE (fechas)------------
/* console.log(new Date(2020, 1, 15));

const casiNavidad = new Date(2021, 11, 25, 23, 59, 59);
console.log(casiNavidad);

const hoy = new Date("December 17, 2021");
console.log(hoy.toDateString()); */