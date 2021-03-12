const btnWrapRef = document.querySelector('.plan__btn-wrap');
const btnIndividualRef = document.querySelector('.plan__btn--individual');
const btnCompanyRef = document.querySelector('.plan__btn--company');

const cardWrapRef = document.querySelector('.plan__tariffs-wrap');
const cardFreeRef = document.querySelector('.plan__card--free');
const cardProRef = document.querySelector('.plan__card--pro');
const cardBusinessRef = document.querySelector('.plan__card--business');
const cardUltraRef = document.querySelector('.plan__card--ultra');

btnIndividualRef.addEventListener('click', e => {
  e.preventDefault();

  if (!e.target.classList.contains('active')) {
    btnIndividualRef.classList.add('active');
    btnCompanyRef.classList.remove('active');
    cardFreeRef.classList.add('show');
    cardProRef.classList.add('show');
    cardBusinessRef.classList.remove('show');
    cardUltraRef.classList.remove('show');
  }
});

btnCompanyRef.addEventListener('click', e => {
  e.preventDefault();

  if (!e.target.classList.contains('active')) {
    btnCompanyRef.classList.add('active');
    btnIndividualRef.classList.remove('active');
    cardBusinessRef.classList.add('show');
    cardUltraRef.classList.add('show');
    cardFreeRef.classList.remove('show');
    cardProRef.classList.remove('show');
  }
});

cardFreeRef.addEventListener('click', hideActiveClassToCard);
cardProRef.addEventListener('click', hideActiveClassToCard);
cardBusinessRef.addEventListener('click', hideActiveClassToCard);
cardUltraRef.addEventListener('click', hideActiveClassToCard);

function hideActiveClassToCard(e) {
  if (!e.currentTarget.classList.contains('active')) {
    console.log(e.currentTarget);
    cardFreeRef.classList.toggle('active');
    cardProRef.classList.toggle('active');
    cardBusinessRef.classList.toggle('active');
    cardUltraRef.classList.toggle('active');
  }
}
