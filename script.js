let modeSwitcher = document.querySelector('#switcher');
modeSwitcher.addEventListener('click', switchMode)
d = 0

function switchMode() {
	if(d == 0) {
		document.documentElement.setAttribute('data-theme', 'dark');
		d = 1;
		modeSwitcher.textContent = 'Light Mode Switcher';
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		modeSwitcher.textContent = 'Dark Mode Switcher';
		d = 0;
	}
}


const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 0.75);

  target.forEach(function(element) {

    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);

    } else {
      element.classList.remove(animationClass);
    }
  })

}

setTimeout(window.addEventListener('scroll', function() {
	animeScroll();
}), 400)

let h2 = document.querySelector('.offer h2');
let ps = document.querySelectorAll('.offer p');
pt = 0;

ps[3].addEventListener('click', changeLang);

function changeLang() {
	if(pt == 0) {
		h2.innerText = 'Eu sou uma desenvolvedora junior, e aqui estão umas coisas que eu sei fazer:';
		ps[0].innerText = 'Interruptor de Modo Dark';
		ps[1].innerText = 'Scroll Animado';
		ps[2].innerText = 'Animações';
		ps[3].innerText = 'Mudança de língua(En)'
		pt = 1;
	}
	else {
		h2.innerText = 'I\'m a junior dev, and here is what I can do:';
		ps[0].innerText = 'Dark Mode Switcher';
		ps[1].innerText = 'Animated Scroll';
		ps[2].innerText = 'Animations';
		ps[3].innerText = 'Language Change(Pt-br)';
		pt = 0;
	}
}