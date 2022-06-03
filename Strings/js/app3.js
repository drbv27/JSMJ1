//como concatenar o unir Strings (textos)

const producto = 'Monitor de 21 pulgadas'
const precio = "150 USD"

//PRIMERA FORMA de concatenar textos

console.log(producto);
console.log(precio);

console.log(producto.concat(' En Descuento'))
console.log(producto.concat(precio));

//otra forma de concatenar texto

console.log(producto+precio)

console.log("El Producto:"+producto +" tiene un precio de"+precio+" y está en descuento");

//ES6 trajo una mejor manera de concatenar textos o variables y es con algo llamado template strings o mas adelante veremos que tmb se llaman template literals.

let mensaje = `El productico ${producto} tiene un preciecito de ${precio}`;

console.log(mensaje)

const nombre1 = "Diego";
const nombre2 = "Gerardo";
const apellido1 = "Bonilla";
const apellido2 = "Villa"

let bienvenida = `Hola: ${nombre1} ${nombre2} ${apellido1} ${apellido2}, Bienvenido!!!`;

console.log(bienvenida)