// Data
const words = [
  "hola",
  "adiós",
  "manzana",
  "banana",
  "pera",
  "uva",
  "plátano",
  "naranja",
  "limón",
  "melocotón",
];

// Functions
function resetList(ul) {
  ul.innerHTML = "";
}

function fillList(ul, elements) {
  elements.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = element;
    ul.appendChild(li);
  });
}

// DOM Elements
const input = document.getElementById("input");
const ul = document.getElementById("results");

// Observables
const listaInicial$ = rxjs.of(words);

const search$ = rxjs.fromEvent(input, "input").pipe(
  rxjs.debounceTime(300),
  rxjs.map((event) => event.target.value),
  rxjs.switchMap((value) => {
    const filteredWord = words.filter((word) => word.includes(value));
    return rxjs.of(filteredWord);
  })
);

// Observables' subscriptions
search$.subscribe((filteredWords) => {
  resetList(ul);
  fillList(ul, filteredWords);
});

listaInicial$.subscribe((words) => {
  resetList(ul);
  fillList(ul, words);
});
