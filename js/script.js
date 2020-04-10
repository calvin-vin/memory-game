document.addEventListener('DOMContentLoaded', () => {

	// card options
	const cardArray = [
		{
			name : 'amang',
			images : 'img/amang.png'
		}, 
		{
			name : 'amang',
			images : 'img/amang.png'
		},
		{
			name : 'epi',
			images : 'img/epi.png'
		}, 
		{
			name : 'epi',
			images : 'img/epi.png'
		},
		{
			name : 'fakjar',
			images : 'img/fakjar.png'
		}, 
		{
			name : 'fakjar',
			images : 'img/fakjar.png'
		},
		{
			name : 'sukro',
			images : 'img/sukro.png'
		}, 
		{
			name : 'sukro',
			images : 'img/sukro.png'
		},
		{
			name : 'taichou',
			images : 'img/taichou.png'
		}, 
		{
			name : 'taichou',
			images : 'img/taichou.png'
		},
		{
			name : 'zero',
			images : 'img/zero.png'
		}, 
		{
			name : 'zero',
			images : 'img/zero.png'
		}
	];

cardArray.sort(() => 0.5 - Math.random());	

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardChosen = [];
var cardChosenId = [];
var cardWon = [];

// create board
function createBoard() {
	for (let i = 0; i < cardArray.length; i++) {
		var card = document.createElement('img');
		card.setAttribute('src', 'img/blank.png');
		card.setAttribute('data-id', i);
		card.addEventListener('click', flipCard);
		grid.appendChild(card);
	}
}

createBoard();

// check for matches
function checkForMatches() {
	var cards = document.querySelectorAll('img');
	const optionOneId = cardChosenId[0];
	const optionTwoId = cardChosenId[1];
	if (cardChosen[0] === cardChosen[1]) {
		alert('You found a matches');
		cards[optionOneId].setAttribute('src', 'img/white.png');
		cards[optionTwoId].setAttribute('src', 'img/white.png');
		cardWon.push(cardChosen);
	} else {
		cards[optionOneId].setAttribute('src', 'img/blank.png');
		cards[optionTwoId].setAttribute('src', 'img/blank.png');
		alert('Sorry, try again');
	}
	cardChosen = [];
	cardChosenId = [];
	resultDisplay.textContent = cardWon.length;
	if (cardWon.length === cardArray.length/2 ) {
		resultDisplay.textContent = 'Congratulation! You found them all';
	}
}


// flip the card
function flipCard() {
	var cardId = this.getAttribute('data-id');
	cardChosen.push(cardArray[cardId].name);
	cardChosenId.push(cardId);
	this.setAttribute('src', cardArray[cardId].images);
	if (cardChosen.length === 2 ) {
		setTimeout(checkForMatches, 500);
	}
}

});