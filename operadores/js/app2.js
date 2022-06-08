const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//revisar si  2 valores son iguales o diferentes
//el igual sencilllo = es un operador de asignacion

console.log(numero1==numero3)
//ojo los comparadores dobles == != no diferencia el tipo de dato
console.log(numero1 == numero2);
console.log(typeof numero1)
console.log(typeof numero2)

//para solucionarlo existen los comparadores triples
//o comparadores estrictos
console.log(numero1===numero3)
//diferentes != y !==

console.log(numero1 != numero2)
console.log(numero1 !== numero2)
