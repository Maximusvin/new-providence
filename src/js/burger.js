const refs = {
  burger: document.querySelector('#burger'),
  menu: document.querySelector('.menu'),
  menuWrap: document.querySelector('.menu-wrap'),
  logoTablet: document.querySelector('.header__logo-tablet'),
};

refs.burger.addEventListener('click', toggleBurger);
refs.menuWrap.addEventListener('click', closeBurger);
refs.logoTablet.addEventListener('click', closeBurger);

function toggleBurger(event) {
  event.preventDefault();
  event.currentTarget.classList.toggle('active');
  refs.menuWrap.classList.toggle('active');
  document.body.classList.toggle('lock');
}

function closeBurger(event) {
  refs.burger.classList.remove('active');
  refs.menuWrap.classList.remove('active');
  document.body.classList.remove('lock');
}
