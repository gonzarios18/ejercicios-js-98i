/* Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
*/
let primernumero = Number
primernumero= prompt("Ingrese un numero");
if (primernumero % 2 == 0) {
    alert("El numero "+primernumero+ " es divisible en 2" )
} else {
   alert("El numero "+ primernumero +" no es divisible en 2");
}
let segundonumero = Number
 segundonumero = prompt("Por favor ingrese otro numero");
if(segundonumero % 2 === 0) {
    alert("El numero es divisible en 2")
} else {
 alert("El numero "+ segundonumero + " no es divisible en 2");
}
