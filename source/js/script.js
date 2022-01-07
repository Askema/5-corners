const toggle = document.querySelector('.header__toggle');
const nav = document.querySelectorAll('.nav');
const translate = document.querySelector('.translate');
const user = document.querySelector('.user-block');

nav.forEach(element => element.classList.add('nav--closed'));
toggle.classList.add('header__toggle--closed');

toggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  toggle.classList.toggle('header__toggle--closed');
  toggle.classList.toggle('header__toggle--open');
  nav.forEach(element => element.classList.toggle('nav--closed'));
});
