const burgerRef = document.querySelector('.burger--btn');
const navigationRef = document.querySelector('.header__navigation');

burgerRef.addEventListener('click', e => {
  e.preventDefault();

  burgerRef.classList.toggle('active');
  navigationRef.classList.toggle('active');

  // $('body').toggleClass('lock');
  // $('.navigation .logo').toggleClass('close');
  // $('.burger__wrap .logo').toggleClass('open');
});

// $(function () {
//   $('.menu__link').click(function (e) {
//     e.preventDefault();
//     if (document.querySelectorAll('.lock').length > 0) {
//       $('.burger').toggleClass('active');
//       $('.burger--btn').toggleClass('active');

//       $('body').toggleClass('lock');
//       $('.navigation .logo').toggleClass('close');
//       $('.burger__wrap .logo').toggleClass('open');
//     }
//   });
// });

// $(function () {
//   $('.burger__btn').click(function (e) {
//     e.preventDefault();
//     $('.burger').toggleClass('active');
//     $('.burger--btn').toggleClass('active');
//     $('body').toggleClass('lock');
//     $('.navigation .logo').toggleClass('close');
//     $('.burger__wrap .logo').toggleClass('open');
//   });
// });
