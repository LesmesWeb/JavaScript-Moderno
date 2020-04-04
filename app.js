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
si se declara var esta solo queda de forma local al metodo que se va a utilizar.
mientra si no se usa var aplica para todo el documento *.js
fuente:https://es.stackoverflow.com/questions/60382/en-que-momento-usar-var-en-javascript-y-por-que-es-necesario
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

// ---------- inicio Ejercicio 4 (metodos en las variables de cadena de texto) ---

/*
let nombre = "Camilo L"

console.log(nombre.length)                        //Cantidad de carácteres solo aplica en texto
console.log(nombre.concat(' ','de Bogotá'))       //Concatenar
console.log(nombre.toLowerCase())                 //String a minúsculas
console.log(nombre.toUpperCase())                 //String a mayúsculas
console.log(nombre.indexOf("L"))                  //Me indica en que numero se encuentra ese caracter (7), sino lo encuentra genera (-1)
console.log(nombre.toUpperCase())                 //String a mayúsculas
console.log(nombre.substring(0,6))                //toma el texto y lo corta usando el indice
console.log(nombre.slice(-8,4))                   // toma un “trozo” de un array, indicado por un índice de inicio y un índice final 
console.log(nombre.split(' '))                    //divide por el espacio la cadena
console.log(nombre.replace('L','Lesmes'))         //reemplaza la cadena
console.log(nombre.includes('Camilo'))            //retorna un boleano si el contenido se encuentra True
console.log(nombre.repeat(3))                 //repite la cadena el numero de veces que se le indique
*/
// ---------- Fin Ejercicio 4 ---------


// ---------- inicio Ejercicio 5 (Operadores Aritméticos) ---
/*
//Se crean constantes porque no quiero que el valor de la variable cambie
const numero1 = 30;
      numero2 = 20;
      numero3 = 20.20;
      numero4 = .1020;
      numero5 = -3;

//let porque el valor va cambiar
let resultado;

//suma
resultado = numero1 + numero2;
//resta
resultado = numero1 - numero2;
//Multiplicación
resultado = numero1 * numero2;
//División
resultado = numero1 / numero2;
//Modulo (Residuo)
resultado = numero1 % numero2;
//Pi
resultado = Math.PI; //3.14
//Redondeo estandar
resultado = Math.round(2.4);
//Redondeo positivo
resultado = Math.ceil(2.4); //3
//redondeo negativo
resultado = Math.floor(2.4); //2
//Raiz cuadrada
resultado = Math.sqrt(144); //12
//Numero absoluto
resultado = Math.abs(numero5); //3
//Potencia
resultado = Math.pow(8,2); //64
//Minimo
resultado = Math.min(3,6,5,1,9,7,8); //1
//Maximo
resultado = Math.max(3,6,5,1,9,7,8); //9
//Numero Aleatorio
resultado = Math.random(); //0.548866781700361
//Jerarquía de las operaciones incluida
resultado = 10 + 20 *5 //110
resultado = (10 + 20) * 5 //150 
//20% de descuente de 3 productos
resultado = (10 + 20 + 70) * .20 //20

console.warn("resultado es: ",resultado)

//incremento positivo
let incremento = 5
++incremento                               //6
incremento += 2                              
console.warn("Incremento es: ",incremento) //8

//decremento
--incremento
--incremento //6
incremento -=3
console.error("Incremento es: ",incremento) //3

*/
// ---------- Fin Ejercicio 5 ---------

// ---------- inicio Ejercicio 6 (Tipos de datos) ---
/*
//Tipo Primitivos
let valor;                                             //undefined;
valor = undefined                                      //undefined;
valor = 'juan';                                        //string
valor = true;                                          //boolean
valor = Symbol('Simbolo')                              //symbol
valor = null;                                          //object null

valor = 20;                                            //number
valor = 20.20;                                         //number
valor = -30;                                           //number

//Referencia o de tipo objeto
valor = [1,2,3,4]                                      //object array
valor = {valor:'juan', profesion:'desarrollador'}      //object object
valor = new Date()                                     //object 

console.log(typeof valor)
*/
// ---------- Fin Ejercicio 6 ---------


// ---------- inicio Ejercicio 7 (operadores de comparación) ---
/*
const numero1 = 20;
const numero2 = 50;
const numero3 = '20';

console.log(numero1>numero2);                         //false
console.log(numero1<numero2);                         //true

//Comparador igual
//comparador no tan estricto omite el tipo (==)
console.log(20 == numero3);                           //true
console.log("no estricto: ", null == undefined)        //true
//comparador estricto por tipo y elemento (===)
console.log(20 === numero3);                          //true
console.log("Estricto: ", null === undefined)        //true

console.log('hola' == ' hola');                       //false

//Diferente
console.log("Diferente: ",2 != 3)                     //true

//A-Z menor peso que a-z (JS moderno)
console.error("minuscas son mayores que las mayusculas: ",'z'>'A') //True
*/
// ---------- Fin Ejercicio 7 ---------

// ---------- inicio Ejercicio 8 (Convertir String a numero) ---
/*
const numero1 = "50",
      numero2 = 10,
      numero3 = 'tres';

console.log(typeof numero1) //string

//No los suma, lo concatena
console.log("resultado es: ",numero1 + numero2)                   //5010

//Convertir string a Numero
console.log("resultado Number: ", Number(numero1) + numero2)      //60
console.log("resultado parseInt: ", parseInt(numero1) + numero2)  //60
console.log("resultado NaN: ", Number(numero3));                  //Nan (No es un numero)

//Number (Js Moderno)
let dato;
dato = Number("20");                //20
dato = Number('20.10931')           //20.10931
dato = Number(true)                 //1                 
dato = Number(false)                //0
dato = Number(null)                 //0
dato = Number(undefined)            //Nan (No es un numero)
dato = Number('hola mundo')         //Nan (No es un numero)
dato = Number([1,2,3,4])            //Nan (No es un numero)
console.log("Convert Number: ",dato)

//ParseFloat y ParseInt
datos = parseInt('100');            //100
datos = parseInt('100');            //100
datos = parseFloat('100');          //100
datos = parseFloat('100.2030');     //100.2030
console.log("Convert parse: ",datos)

// toFixed
datofixed = '18.12356463'
console.log("Fixed parse: ", parseFloat(datofixed).toFixed(2)) //18.12
*/
// ---------- Fin Ejercicio 8 ---------

// ---------- inicio Ejercicio 9 (Convertir numero a String) ---
/*
let cp;

cp = 90210;
console.warn(cp.length); //undefined solo aplica para cadena de texto

cp = String(cp);
console.warn(cp.length); //5
console.log(typeof cp);  //string

let dato;
dato = '4' + '4';
console.log(dato.length); //2

//Boleanos
boolean_true = true;
boolean_false = false;
boolean_true = String(boolean_true);
console.log("Boolean Str: ",boolean_true.length); //4
console.log("Boolean false: ",boolean_false.length); //undefined

//arreglo
arreglo = [1,2,3];
console.log("arreglo: ",arreglo.length); //3

//tostring();
dato = 20;   //20
dato = true; //true
dato = null; //error
dato = dato.toString();

console.error(dato);
console.error(dato.length);
*/

// ---------- Fin Ejercicio 9 ---------


// ---------- inicio Ejercicio 10 (template literals o string template) ---

//no van a variar
const producto1 = 'Pizza',
      precio1 = 30,
      producto2 = 'Hamburguesa',
      precio2 = 40;

//Forma vieja de crear un html (String template)

//la variable va cambiar
/*
let html;
html = '<ul>'+
       '<li>Orden: ' + producto1 + '</li>' +
       '<li>Precio: ' + precio1 + '</li>'  +
       '<li>Orden: ' + producto2 + '</li>' +
       '<li>Precio: ' + precio2 + '</li>'  +
       '<hr>'+
       '<li>Total: '+ (precio1+precio2) + '</li>' +
      '</ul>';

       console.log(html)
       
//pintamos en el DOM
document.getElementById('ejercicio_10_template_forma_vieja').innerHTML = html;
*/

//en la forma moderna puede contener funciones en sus templates (JS MODERNO)
let hml_literals;

hml_literals = `
            <ul>
                  <li>Orden: ${producto1} </li>
                  <li>Precio: ${precio1} </li>
                  <li>Orden: ${producto2} </li>
                  <li>Precio: ${precio2} </li>
                  <hr>
                  <li>Total: ${total(precio1,precio2)}  </li>
            </ul>
            `;

function total(precio1,precio2){
      return precio1 + precio2;
}

document.getElementById('ejercicio_10_template_forma_moderna_literals').innerHTML = hml_literals;

                              

//Template Literals (JS moderno)


// ---------- Fin Ejercicio 10 ---------