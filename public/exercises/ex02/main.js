/*
 * 
 * 2. Duplicar números: 
 * Crea un observable que emita una secuencia de números del 1 al 5 y utiliza 
 * el operador `map` para duplicar cada número emitido.
 * 
 */

const observable = rxjs.range(1, 5);
const observableDuplicado = observable.pipe(
    rxjs.map(x => x)
)

console.log("Observable original")
observable.subscribe(x => console.log(x))

console.log("")

console.log("Observable Duplicado")
observableDuplicado.subscribe(x => console.log(x))