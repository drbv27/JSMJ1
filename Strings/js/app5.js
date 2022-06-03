//3 metodos utiles mas .replace .slice y .repeat .substring .charAt

//Replace

const producto = 'Monitor de 21 pulgadas';
console.log(producto)
console.log(producto.replace("21","24"));
console.log(producto.replace('pulgadas','"'))

//slice les va a permitir extraer una parte de un string
console.log(producto.slice(0,10));//inocia en la posicion 0 y va hasta la 10
console.log(producto.slice(8))

console.log(producto.slice(2,10));

console.log(producto.slice(8,1))

//substring
console.log(producto.substring(0,10))
console.log(producto.substring(10,0))

//si han vvisto algunos sitios web donde extraen sus iniciales se usa charAt

const nombre = "Diego";
const apellido ="Bonilla"
let inicial1 =nombre.charAt(0);
let inicial2 =apellido.charAt(0);

console.log(`${inicial1}.${inicial2}.`);



