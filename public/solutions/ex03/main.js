/*
 *
 * 3. Contador de clics: 
 * Crea un observable a partir de un evento de clic en un botón y utiliza el 
 * operador `scan` para contar el número total de clics.
 *  
 */

const button = document.getElementById('myButton')
const observableClicks$ = rxjs.fromEvent(button, 'click')

const observableContadorClicks$ = observableClicks$.pipe(
    rxjs.scan(count => count + 1, 0)
)

observableContadorClicks$.subscribe(x => console.log(x))