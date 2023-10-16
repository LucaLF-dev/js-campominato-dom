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
const selectDOMElement = document.getElementById('difficolta-game')
console.log(selectDOMElement)

gameBtnElement.addEventListener("click", function () {
	console.log("gioca");
	//     - svuoto la griglia delle celle generate in precedenza
	gridElement.innerHTML = "";
	//     - genero 100 caselle,  con un numero progressivo da 1 a 100


// creo una variabile difficoltà , selezionando il valore della select nel dom
    const difficoltà = selectDOMElement.value;
    console.log(difficoltà)

    let cellLenght = 100
    if (difficoltà === 'difficolta-2') {
        // con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
		cellLenght = 9 **2
        j = 9
    } else if (difficoltà === 'difficolta-3') {
		// con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
        cellLenght = 7 **2
        j = 7
    } else {
		// con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
        j = 10
    }
    console.log(cellLenght)
       


	for (let i = 0; i < cellLenght; i++) {
		const n = i + 1;
		// console.log(n);
        
		//  - creo una variabile col contenuto che andrà poi stampato nel dom element grid
		const htmlCell = `<div class="cell cell${-j} "> ${n}</div> `;
        console.log(htmlCell)
		// console.log(htmlCell);

		// - stampo nel dom le celle concatenando il gridelement al htmlcell
		gridElement.innerHTML += htmlCell;
	}

	//    - recupero tutte le caselle create
	const cellDOMElement = document.querySelectorAll(".cell");
	// console.log(cellDOMElement);

	//    - ciclo le caselle del dom nell' array
	for (let i = 0; i < cellDOMElement.length; i++) {
		const currentCellElement = cellDOMElement[i];

		//   - aggiungo ad ogni casella l'eventlistner, che al click cambiera il background in verde
		currentCellElement.addEventListener("click", function () {
			// currentCellElement.classList.add("bg-azure");

			// prendo il numero della casella corrente
			const currentCellElement
            console.log(cellDOMElement)
		});
	}
});




