import Swiper from './../../node_modules/swiper';
  // import Swiper styles
import './../../node_modules/swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper-container',{
    
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
