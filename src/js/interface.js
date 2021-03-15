import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const INTERFACE = new Swiper('.interface__slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.interface__slider-pagination',
    clickable: true,
  }
});

