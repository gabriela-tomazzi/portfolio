let modeSwitcher = document.querySelector('#switcher');
modeSwitcher.addEventListener('click', switchMode)
d = 0

function switchMode() {
	if(d == 0) {
		document.documentElement.setAttribute('data-theme', 'dark');
		d = 1;
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		d = 0;
	}
}