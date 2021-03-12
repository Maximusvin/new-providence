const btnWrapRef = document.querySelector('.plan__btn-wrap');
const btnIndividualRef = document.querySelector('.plan__btn--individual');
const btnCompanyRef = document.querySelector('.plan__btn--company');

const cardWrapRef = document.querySelector('.plan__tariffs-wrap');
const cardFreeRef = document.querySelector('.plan__card--free');
const cardProRef = document.querySelector('.plan__card--pro');

btnWrapRef.addEventListener('click', hideActiveClass);

function hideActiveClass(e) {
  e.preventDefault();

  if (!e.target.classList.contains('active')) {
    btnIndividualRef.classList.toggle('active');
    btnCompanyRef.classList.toggle('active');
  }
}

cardWrapRef.addEventListener('click', e => {
  if (!e.target.classList.contains('active')) {
    cardFreeRef.classList.toggle('active');
    cardProRef.classList.toggle('active');
  }
});
