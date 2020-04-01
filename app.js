// ---------- Inicio Ejercicio 1 (mensaje, console y document) ---------
/*

// Cuadros de diálogo

prompt('recibe datp');                //mensaje que captura variable
alert('error')                        //mensaje informativo
confirm("¿deseas quitarlo?")          //true o false

// Mostrar en consola del navegador

console.time('Ejecución');            // Habilita la ecución de tiempo
console.log([1,2,3]);                 // Muestra los datos en una linea
console.table([1,2,3]);               // Muestra los datos en una tabla
console.warn('amarillo')              // Mensaje en amarillo
console.error('rojo')                 // Mensaje en rojo
console.timeEnd('Ejecución');         // Finaliza y muestra el tiempo de ejecución

//document contiene todo el html (DOM)

document.querySelector('h1')            // selecciona una etiqueta del DOM
document.getElementById('app').innerHTML = `Bienvenido`;  //incruta en el html un string


*/
// ---------- Fin Ejercicio 1 ---------


// ---------- Inicio Ejercicio 2 (estilos y variables)---------

// Variables - Estilos (camelcase,underscore,Pascal case)

/*
var primerNombre = 'camelcase'          //Más recomendada para JS
var primer_nombre = 'underscore'
var PrimerNombre = 'Pascal case'
*/

// 3 maneras de crear variables (var, let , const)
/*
//var
esta variable no tiene contraindicaciones pero no es del todo recomenda por su peso en memoria.
*/

/*
//let se usa siempre que el valor puede ser modificado en el futuro pero no se puede crear una idefinida inicial o genera error ejemplo:

let letNombre // undifined
let letNombre = 'underscore' // no se puede volver a declarar ej: undifined a underscore

// ejemplo 2: esta es la manera correcta
letNombre = "cambio su valor"
letNombre = "sobre escribir"
console.log(letNombre)
*/

/*
//una constante siempre se debe inicializar y no se puede cambiar su valor

//const producto         // error se debe inicializar
const productoFunciona = "inicializada con string"
console.log(productoFunciona)
*/

// ---------- Fin Ejercicio 2 ---------


// ---------- Inicio Ejercicio 3 (concatenar) ---------

/*
let nombre = prompt('Cual es tu nombre');
let edad = prompt('Cual es tu edad');

console.log('i\'am ')

//concatenar de la manera clasica (+)
document.getElementById('concatenar_clasico').innerHTML = 'i\'am ' + nombre +", "+"i'am " + edad + " years old";

//concatenar variables modernas (``) tambien llamadas templates literals
document.getElementById('concatenar_moderno').innerHTML = `i'am  ${nombre}, i'am ${edad} years old`;
*/

// ---------- Fin Ejercicio 3 ---------

// ---------- inicio Ejercicio 4 (metodos en las variables) ---------

nombre = "Camilo L"

console.log(nombre.length)                        //Cantidad de carácteres
console.log(nombre.concat(' ','de Bogotá'))       //Concatenar
console.log(nombre.toLowerCase())                 //String a minúsculas
console.log(nombre.toUpperCase())                 //String a mayúsculas
console.log(nombre.indexOf("L"))                  //Me indica en que numero se encuentra ese caracter (7), sino lo encuentra genera (-1)



// ---------- Fin Ejercicio 4 ---------