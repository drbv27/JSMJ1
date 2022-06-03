//errores muy comunes el las DB o en las variables que guaradmos por interaccion de los usuarios es que dejan espacios en blanco al ppio o al final

const producto1234 = '         Monitor de 21 pulgadas      ';
console.log(producto1234);
console.log(producto1234.length);

//Eliminar espacios al ppio
console.log(producto1234.trimStart());
//Eliminar al final tmb hay
console.log(producto1234.trimEnd());
//los metodos en JS se pueden encadenar es decir colocarse uno junto a otro para que se ejecuten ambos
console.log(producto1234.trimStart().trimEnd());
//esto se puede reemplazar por un solo metodo
console.log(producto1234.trim())
console.log(producto1234.trim().length)

