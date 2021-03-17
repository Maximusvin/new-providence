import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const INTERFACE = new Swiper('.interface__slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  speed:1000,
  direction: 'horizontal',
  mousewheel:
    {
      invert: true,
    },
  autoplay:
    {
      stopOnLastSlide: false,
      disableOnInteraction: true,
      delay: 2000,
    }
});


