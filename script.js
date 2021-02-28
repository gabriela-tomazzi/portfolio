let button = document.getElementById('language');
let langs = ["Change language", "Mudar língua"];
let i = 0;

function changeLanguage() {
	button.innerText = langs[i];
	i == 1 ? i = 0 : i++;

	if ( i == 1) {
		portHero();
		portAbout();
		// portProducts();
	} else {
		engHero();
		engAbout();
	}
	
}

function portHero() {
	let h1 = document.querySelector('.hero h1');
	h1.innerHTML = '<h1>Olá, eu sou <span class="text_destaque">Gabi</span>.</h1>';

	let p = document.querySelector('.hero p');
	p.innerHTML = '<p>E eu sou uma <span class="text_destaque">desenvolvedora </span>  full stack!</p>';
}
function engHero() {
	let h1 = document.querySelector('.hero h1');
	h1.innerHTML = '<h1>Hi, I am <span class="text_destaque">Gabi</span>.</h1>';

	let p = document.querySelector('.hero p');
	p.innerHTML = '<p>I am a full stack <span class="text_destaque"> developer</span>!</p>';
}

const pes = document.querySelectorAll('p');
function portAbout() {
	let h2 = document.querySelector('.about h2');
	h2.innerHTML = '<h2> <span>Sobre mim</span> </h2>';

	let pDescription = document.querySelector('.about p');
	pDescription.innerHTML = '<p>Eu posso criar sites simples para o seu pequeno negócio, para você mesmo, ou para qualquer outro motivo. Se você prescisar de algo assim, eu posso fazer! Em caso de você estar interessado nas tecnologias que uso, elas são HTML5, CSS3, JS e React para projetos mais complexos.</p>';

	// for (let i = 0; i < pes.length; i++) {
	// 	pes[i].innerHTML = i;
	// }

	pes[2].innerHTML = '<p class="info"><strong>Nome: </strong>Gabriela S. Tomazzi</p>';
	pes[3].innerHTML = '<p class="info"><strong>Telefone: </strong>51 99644-2059</p>';
	pes[4].innerHTML = '<p class="info"><strong>Comissões: </strong>Disponíveis</p>';
	pes[5].innerHTML = '<p class="info"><strong>Anos de experiência: </strong>1</p>';
	pes[6].innerHTML = '<p class="info"><strong>Idade: </strong>16</p>';
	pes[7].innerHTML = '<p class="info"><strong>Origem: </strong>Brasil</p>';
	pes[8].innerHTML = '<p class="info"><strong>Email: </strong>gabtomazzi@gmail.com</p>';
	pes[9].innerHTML = '<p class="info"><strong>Github: </strong><a target="_blank" href="https://github.com/gabriela-tomazzi">Clique!</a></p>';
}
function engAbout() {
	let h2 = document.querySelector('.about h2');
	h2.innerHTML = '<h2> <span>About me</span> </h2>';

	let pDescription = document.querySelector('.about p');
	pDescription.innerHTML = '<p>I can create simple websites for your small business, for yourself, or anything, if you need something like that, I can do! In case you are interested in which thecnologies I use, they are HTML5, CSS3, JS and React for more complex things.</p>';

	pes[2].innerHTML = '<p class="info"><strong>Name: </strong>Gabriela S. Tomazzi</p>';
	pes[3].innerHTML = '<p class="info"><strong>Phone: </strong>+55 51 99644-2059</p>';
	pes[4].innerHTML = '<p class="info"><strong>Freelancers: </strong>Avaliable</p>';
	pes[5].innerHTML = '<p class="info"><strong>Years of experience: </strong>1</p>';
	pes[6].innerHTML = '<p class="info"><strong>Age: </strong>16</p>';
	pes[7].innerHTML = '<p class="info"><strong>Location: </strong>Brazil</p>';
	pes[8].innerHTML = '<p class="info"><strong>Email: </strong>gabtomazzi@gmail.com</p>';
	pes[9].innerHTML = '<p class="info"><strong>Github: </strong><a target="_blank" href="https://github.com/gabriela-tomazzi">Click me!</a></p>';
	
}