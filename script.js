let button = document.getElementById('language');
let langs = ["Change language", "Mudar língua"];
let i = 0;

function changeLanguage() {
	button.innerText = langs[i];
	i == 1 ? i = 0 : i++;
}
