const burgerBtnRef = document.querySelector('.burger--btn');
const burgerRef = document.querySelector('.burger');
const bodyRef = document.querySelector('.body');
const menuListRef = document.querySelector('.header__menu-list');
const logoRef = document.querySelector('.header__logo');
const infoRef = document.querySelector('.header__info-list');
const navRef = document.querySelector('.header__navigation');
const linkRef = document.querySelector('.js-link');

burgerBtnRef.addEventListener('click', e => {
  e.preventDefault();

  burgerBtnRef.classList.toggle('active');
  burgerRef.classList.toggle('active');
  bodyRef.classList.toggle('lock');
  menuListRef.classList.toggle('active');
  infoRef.classList.toggle('active');

  logoRef.classList.toggle('active');
});

linkRef.addEventListener('click', e => {
  e.preventDefault();

  if (document.querySelectorAll('.lock').length > 0) {
    burgerBtnRef.classList.toggle('active');
    burgerRef.classList.toggle('active');
    bodyRef.classList.toggle('lock');
    menuListRef.classList.toggle('active');
    infoRef.classList.toggle('active');

    logoRef.classList.toggle('active');
  }
});
