/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande
*/

let primerNumero = Number (prompt("Ingrese un numero"));
let segundoNumero = Number (prompt("Ingrese el segundo numero"));
if (primerNumero < segundoNumero) {
    alert(segundoNumero + " es mayor");

} else if (primerNumero > segundoNumero) {
    alert(primerNumero + " es mayor");

} else {
    alert("Los numeros son iguales");
}ñ