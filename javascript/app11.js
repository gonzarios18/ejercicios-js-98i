/* 11.- Añadir al ejercicio anterior que nos diga por 
cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210




Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.
*/
let miNumero= Number(prompt("Ingrese un numero"));
let divisor= "";
if(miNumero % 2 === 0){
    alert("El numero es divisible en 2")

} if (miNumero % 3===0){
    alert("El numero es divisible en 3")
}if(miNumero % 5===0){
    alert("El numero es divisible en 5")
} if (miNumero % 7===0){
    alert("El numero es divisible en 7")
}
