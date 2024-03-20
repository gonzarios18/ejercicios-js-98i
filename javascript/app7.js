/*7.- Escribe un programa que pida 3 números y escriba
en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
*/
let numero1 =Number( prompt("Ingrese el primer numero"));
let numero2 =Number( prompt("Ingrese el segundo numero"));
let numero3 =Number( prompt("Ingrese el tercer numero"));

if(numero1 >= numero2 && numero1 >= numero3) {
    alert("El "+ numero1 +" es mayor")
} else if (numero2 >= numero3 && numero2 >= numero1) {
    alert ("El "+ numero2 + " es mayor");

} else {
    alert ("El "+ numero3 + " es mayor");

}