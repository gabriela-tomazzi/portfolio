let button = document.getElementById('language');
let langs = ["Change language", "Mudar língua"];
let i = 0;

function changeLanguage() {
	button.innerText = langs[i];
	i == 1 ? i = 0 : i++;

	if ( i == 1) {
		portHero();
		portAbout();
		portProducts();
	} else {
		engHero();
	}
	
}

function portHero() {
	let h1 = document.querySelector('.hero h1');
	h1.innerHTML = '<h1>Olá, eu sou <span class="text_destaque">Gabi</span>.</h1>';
	
	let p = document.querySelector('.hero p');
	p.innerHTML = '<p>E eu sou uma <br> <span class="text_destaque">Desenvolvedora </span>  full stack!</p>';
}
function engHero() {
	let h1 = document.querySelector('.hero h1');
	h1.innerHTML = '<h1>Hi, I am <span class="text_destaque">Gabi</span>.</h1>';

	let p = document.querySelector('.hero p');
	p.innerHTML = '<p>I am a full stack <span class="text_destaque"> developer</span>!</p>';
}
function portAbout() {

}
function portProducts() {

}