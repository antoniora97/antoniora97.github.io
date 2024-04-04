/*
 *
 * 1. Filtrar números pares:
 * Crea un observable que emita una secuencia de números del 1 al 10 y utiliza el operador
 * `filter` para emitir solo los números pares.
 *
 */

const observable = rxjs.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // o const observable = range(1, 10)
const observablePares = observable.pipe(rxjs.filter((x) => x % 2 === 0));

console.log("Observable original");
observable.subscribe((x) => console.log(x));

console.log("");

console.log("Observable Pares");
observablePares.subscribe((x) => console.log(x));
