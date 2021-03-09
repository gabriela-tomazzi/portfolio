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
		engAbout();
		engProducts();
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

	pes[1].innerHTML = '<p class="info"><strong>Nome: </strong>Gabriela S. Tomazzi</p>';
	pes[2].innerHTML = '<p class="info"><strong>Telefone: </strong>51 99644-2059</p>';
	pes[3].innerHTML = '<p class="info"><strong>Comissões: </strong>Disponíveis</p>';
	pes[4].innerHTML = '<p class="info"><strong>Anos de experiência: </strong>1</p>';
	pes[5].innerHTML = '<p class="info"><strong>Idade: </strong>16</p>';
	pes[6].innerHTML = '<p class="info"><strong>Origem: </strong>Brasil</p>';
	pes[7].innerHTML = '<p class="info"><strong>Email: </strong>gabtomazzi@gmail.com</p>';
	pes[8].innerHTML = '<p class="info"><strong>Github: </strong><a target="_blank" href="https://github.com/gabriela-tomazzi">Clique!</a></p>';

}
function engAbout() {
	let h2 = document.querySelector('.about h2');
	h2.innerHTML = '<h2> <span>About me</span> </h2>';

	pes[1].innerHTML = '<p class="info"><strong>Name: </strong>Gabriela S. Tomazzi</p>';
	pes[2].innerHTML = '<p class="info"><strong>Phone: </strong>+55 51 99644-2059</p>';
	pes[3].innerHTML = '<p class="info"><strong>Freelancers: </strong>Avaliable</p>';
	pes[4].innerHTML = '<p class="info"><strong>Years of experience: </strong>1</p>';
	pes[5].innerHTML = '<p class="info"><strong>Age: </strong>16</p>';
	pes[6].innerHTML = '<p class="info"><strong>Location: </strong>Brazil</p>';
	pes[7].innerHTML = '<p class="info"><strong>Email: </strong>gabtomazzi@gmail.com</p>';
	pes[8].innerHTML = '<p class="info"><strong>Github: </strong><a target="_blank" href="https://github.com/gabriela-tomazzi">Click me!</a></p>';

}

function portProducts() {
	let h2 = document.querySelector('.products > h2');
	h2.innerText = 'O que poso fazer por você?';

	let h3s = document.querySelectorAll('h3');
	h3s[0].innerText = 'Manuteção para sites existentes';
	h3s[1].innerText = 'Criar websites!';
	h3s[2].innerText = 'Aplicações desktop';

	let ps = document.getElementsByClassName('catalogP');
	ps[0].innerText = 'Se o seu projeto não esta funcionando normalmente, precisa de um reparo, redesign ou uma nova função.';
	ps[1].innerText = 'Você pose contratar um designer, ou se achar meus projetos agradáveis ao olhar, eu posso faze-los. Sou flexível a preços e datas.';
	ps[2].innerHTML = '<p class="catalogP"> <s>Usando seu site pré-existente, ou um completamente novo.</s> <br> Em breve! </p>';
}
function engProducts() {
	let h2 = document.querySelector('.products > h2');
	h2.innerText = 'What can I do for you?';

	let h3s = document.querySelectorAll('h3');
	h3s[0].innerText = 'Maintein already existing sites';
	h3s[1].innerText = 'Create Websites!';
	h3s[2].innerText = 'Desktop applications';

	let ps = document.getElementsByClassName('catalogP');
	ps[0].innerText = 'If your project is not working properly, need a quick repair, redesign, or you need a new feature.';
	ps[1].innerText = 'You can hire a designer, or if my designs please your eyes, I can do them. I\'m flexible to prices and dates.';
	ps[2].innerHTML = '<p class="catalogP"> <s>Of your already existing project, or a brand new.</s> <br> Coming soon! </p>';
}