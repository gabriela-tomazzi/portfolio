let text_change = document.getElementById('changeText');

const target = document.querySelectorAll('[data-anime]');

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
	text_change.textContent = letter;

	if(letter.length === currentText.length) {	// if the letters are all writed, go to the second word
		count++;
		index = 0
	}

	setTimeout(typeWritter, 200)
}

typeWritter();

function animeScroll() {
	const windowTop = window.pageYOffset + (window.innerHeight * 0.60);

	target.forEach(function(elem) {
		if ((windowTop) > elem.offsetTop) {
			console.log(elem);
			elem.classList.add('animate');
		} else {
			elem.classList.remove('animate');

		}
	})
}

setTimeout(window.addEventListener('scroll', function() {
	animeScroll();
}), 400)
