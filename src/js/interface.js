import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const INTERFACE = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
