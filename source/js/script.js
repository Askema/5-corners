const toggle = document.querySelector('.header__toggle');
const nav = document.querySelectorAll('.nav');
const navLink = document.querySelectorAll('.nav__link');
const header = document.querySelector('.header');
const contactsLink = document.querySelectorAll('.contacts__link');
const userBlockItem = document.querySelectorAll('.user-block__item');
const userBlockLink = document.querySelectorAll('.user-block__link');
const translateItem = document.querySelectorAll('.translate__item');
const translateLink = document.querySelectorAll('.translate__link');
const dropdownList = document.querySelectorAll('.dropdown__list');
const dropdownLink = document.querySelectorAll('.dropdown__link');
const dropdownSvg = document.querySelectorAll('.dropdown__svg');
const logo = document.querySelector('.header__logo');

nav.forEach(element => element.classList.add('nav--closed'));
toggle.classList.add('header__toggle--closed');

toggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  toggle.classList.toggle('header__toggle--closed');
  toggle.classList.toggle('header__toggle--open');
  nav.forEach(element => element.classList.toggle('nav--closed'));
});

window.onscroll = () => {
  if (window.scrollY > 180) {
    header.classList.add('header--fixed');
    contactsLink.forEach(link => link.classList.add('contacts__link--fixed'));
    userBlockItem.forEach(link => link.classList.add('user-block__item--fixed'));
    userBlockLink.forEach(link => link.classList.add('user-block__link--fixed'));
    translateItem.forEach(link => link.classList.add('translate__item--fixed'));
    translateLink.forEach(link => link.classList.add('translate__link--fixed'));
    navLink.forEach(link => link.classList.add('nav__link--fixed'));
    dropdownList.forEach(list => list.classList.add('dropdown__list--fixed'));
    dropdownLink.forEach(link => link.classList.add('dropdown__link--fixed'));
    dropdownSvg.forEach(link => link.classList.add('dropdown__svg--fixed'));
    logo.classList.add('header__logo--fixed');
  } else if (window.scrollY < 180) {
    header.classList.remove('header--fixed');
    contactsLink.forEach(link => link.classList.remove('contacts__link--fixed'));
    userBlockItem.forEach(link => link.classList.remove('user-block__item--fixed'));
    userBlockLink.forEach(link => link.classList.remove('user-block__link--fixed'));
    translateItem.forEach(link => link.classList.remove('translate__item--fixed'));
    translateLink.forEach(link => link.classList.remove('translate__link--fixed'));
    navLink.forEach(link => link.classList.remove('nav__link--fixed'));
    dropdownList.forEach(list => list.classList.remove('dropdown__list--fixed'));
    dropdownLink.forEach(link => link.classList.remove('dropdown__link--fixed'));
    dropdownSvg.forEach(link => link.classList.remove('dropdown__svg--fixed'));
    logo.classList.remove('header__logo--fixed');
  }
}
