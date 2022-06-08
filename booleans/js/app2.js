const boolean1 = true;
const boolean2 = false;

console.log(boolean1===boolean2);

console.log(boolean1 === true);
console.log(boolean1 === false);

//aunque no hemos llegado a a las estructuras de control "if"

if(boolean1){
    console.log("si es verdadero")
} else{
    console.log("no es verdadero")
}

//que en js aplica las mismas comparciones logicas que en cualquier lenguaje o en electronica digital

//and

// a | b | a && b
//f  | f | f
//f  | v | f
//v  | f | f
//v  | v | v

console.log(boolean2 && boolean2)

//or
// a | b | a || b
//f  | f | f
//f  | v | v
//v  | f | v
//v  | v | v
console.log(boolean1 || boolean2)