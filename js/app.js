// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

const gameBtnElement = document.querySelector(".btn-game");
console.log(gameBtnElement);

//   - creo una variabile che richiami dal DOM l'elemento 'grid'
const gridElement = document.querySelector(".grid");
console.log(gridElement);

// Richiamo la select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
const selectDOMElement = document.getElementById("difficolta-game");
console.log(selectDOMElement);

// Richiamo dal Dom l'elemento 'punteggio' figlio di wrapper__punteggio
const punteggioDOMElement = document.getElementById("punteggio");
console.log(punteggioDOMElement);

const mainWrapperDOMElement = document.querySelector(".main__wrapper");

// creo una funzione per avere un array con 16 numeri casuali diversi tra loro
function getArrayOfRandomIntBetween(min, max, number) {
	const arrayBombs = [];

	// popolare l'array con 16 numeri random non duplicati
	while (arrayBombs.length < number) {
		// generare un numero random da rangeMin a rangeMAx
		const n = getRandomIntInclusive(min, max);
		// console.log(n)
		// SE n non è presente nell'array di bombe
		console.log(arrayBombs.includes(n));
		if (arrayBombs.includes(n) !== true) {
			// pushare il numero nell'array di bombe
			arrayBombs.push(n);
		}
		console.log(arrayBombs);
	}

	// return array di numeri generati
	return arrayBombs;
}

// creo una funzione per avere dei numeri interi random
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

gameBtnElement.addEventListener("click", function () {
	console.log("gioca");
	//     - svuoto la griglia delle celle generate in precedenza
	gridElement.innerHTML = "";
	//     - genero 100 caselle,  con un numero progressivo da 1 a 100
	punteggioDOMElement.innerHTML = "";

	gridElement.classList.remove("pointer-none");
	// creo una variabile difficoltà , selezionando il valore della select nel dom
	const difficoltà = selectDOMElement.value;
	// console.log(difficoltà)

	let cellLenght = 100;
	let j = 10;
	if (difficoltà === "difficolta-2") {
		// con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
		cellLenght = 9 ** 2;
		j = 9;
	} else if (difficoltà === "difficolta-3") {
		// con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
		cellLenght = 7 ** 2;
		j = 7;
	}
	console.log(difficoltà);
	console.log(cellLenght);

	// creo la costante bombe
	const bombNumber = 16;
	const bombe = getArrayOfRandomIntBetween(1, cellLenght, bombNumber);
	// console.log(bombe)

	// genero le nuove caselle in base alla difficoltà da inserire nella griglia del dom
	for (let i = 0; i < cellLenght; i++) {
		const n = i + 1;
		// console.log(n);

		//  - creo una variabile col contenuto che andrà poi stampato nel dom element grid
		const htmlCell = `<div class="cell cell${-j} "> ${n}</div> `;
		// console.log(htmlCell);

		// - stampo nel dom le celle concatenando il gridelement al htmlcell
		gridElement.innerHTML += htmlCell;
	}

	//    - recupero tutte le caselle create
	const cellDOMElement = document.querySelectorAll(".cell");
	console.log(cellDOMElement);

	//    - ciclo le caselle del dom nell' array
	for (let i = 0; i < cellDOMElement.length; i++) {
		const currentCellElement = cellDOMElement[i];

		//   - aggiungo ad ogni casella l'eventlistner, che al click cambiera il background in verde
		currentCellElement.addEventListener("click", function () {
			// currentCellElement.classList.add("bg-azure");

			// prendo il numero della casella corrente
			const selectedCell = i + 1;
			// console.log("Ho cliccato sulla cella numero ", currentCellElement.innerHTML);
			console.log("Ho cliccato sulla cella numero ", i + 1);

			// - SE il numero della casella è presente nell'array di bombe
			if (bombe.includes(selectedCell)) {
				//   - aggiungo la classe bg-red
				currentCellElement.classList.add("bg-red");
				//   - faccio apparire un alert con scritto game over
				gridElement.classList.add("display-none");
				mainWrapperDOMElement.innerHTML += `<div><h1> GAME OVER </h1> </div> `;

				gridElement.classList.add("pointer-none");
				console.log(cellDOMElement);
			} else {
				//   - aggiungo la classe bg-blue
				currentCellElement.classList.add("bg-azure");

				currentCellElement.classList.add("pointer-none");
				//   - incremento il punteggio
				punteggioDOMElement.innerHTML++;
				console.log(punteggioDOMElement.innerHTML);
			}

			const punteggio = punteggioDOMElement.innerHTML;

			if (punteggio == (cellLenght - bombNumber)) {
				gridElement.classList.add("display-none");
				mainWrapperDOMElement.innerHTML += `<div><h1> HAI VINTO ${punteggio} </h1> </div> `;
			}
		});
	}
});
