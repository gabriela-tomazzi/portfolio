const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 0.80);

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