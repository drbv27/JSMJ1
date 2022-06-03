//algunos metodos de strings

const nombreCompleto = "Diego Ricardo Bonilla Villa";
console.log(nombreCompleto);

///conocer la extension o numero de caracteres de un String

let cantidadCaracteres = nombreCompleto.length;

console.log(cantidadCaracteres)

//IndexOf nos dira que posicion tiene un fragmento de texto si lo encuentra, si no lo encuentra nos devuelve -1

console.log(nombreCompleto.indexOf("Agudelo"))

//Includes

console.log(nombreCompleto.includes("Agudelo"))
console.log(nombreCompleto.includes("Villa"))