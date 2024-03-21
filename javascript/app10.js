/* 10.- Escribe un programa que pida un número y nos diga 
si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20


Output: El 20 es divisible por 2.
*/
let miNumero= Number(prompt("Ingrese un numero"));
if(miNumero % 2 === 0){
    alert("El numero es divisible en 2")

} else if (miNumero % 3===0){
    alert("El numero es divisible en 3")
} else if(miNumero % 5===0){
    alert("El numero es divisible en 5")
} else if (miNumero % 7===0){
    alert("El numero es divisible en 7")
}