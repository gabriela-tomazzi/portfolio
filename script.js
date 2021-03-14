let span = document.getElementById('changeText');

let words = [
	'Developer.',
	'Designer.',
	'Gabi!'
]
let count = 0;	//keeps track of words
let index = 0;	//keeps track of letters
let currentText = '';
let letter = '';

function typeWritter() {
	if(count === words.length) {
		count = 0;
	}

	currentText = words[count];
	letter = currentText.slice(0, ++index);		//letter is sliced 0, 0 then 0, 1 0, 2 ...
	span.textContent = letter;

	if(letter.length === currentText.length) {	// if the letters are all writed, go to the second word
		count++;
		index = 0
	}

	setTimeout(typeWritter, 200)
}

typeWritter();