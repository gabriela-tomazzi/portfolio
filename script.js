let modeSwitcher = document.querySelector('#switcher');
modeSwitcher.addEventListener('click', switchMode);

if (localStorage.getItem('d')) {
	var d = localStorage.getItem('d');
} else {
	var d = 0;
}


function switchMode() {
	if(d == 1) {
		document.documentElement.setAttribute('data-theme', 'dark');
		modeSwitcher.textContent = 'Light Mode Switcher';
		localStorage.setItem('d', '1');
		d = 0;
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		modeSwitcher.textContent = 'Dark Mode Switcher';
		localStorage.setItem('d', '0');
		d = 1;
	}
}
switchMode();

let h2 = document.querySelector('.offer h2');
let ps = document.querySelectorAll('.offer p');
pt = 0;

ps[3].addEventListener('click', changeLang);

function changeLang() {
	if(pt == 0) {
		h2.innerText = 'Eu sou uma desenvolvedora junior, e aqui estão umas coisas que eu sei fazer:';
		ps[0].innerText = 'interruptor.deModo.dark()';
		ps[1].innerText = 'scroll.animado(80%)';
		ps[2].innerText = 'animações()';
		ps[3].innerText = 'Mudança.deLíngua(En)';
		pt = 1;
	}
	else {
		h2.innerText = 'I\'m a junior dev, and here is what I can do:';
		ps[0].innerText = 'dark.mode.switcher()';
		ps[1].innerText = 'animated.scroll(80%)';
		ps[2].innerText = 'animations()';
		ps[3].innerText = 'language.change(Pt-br)';
		pt = 0;
	}
}