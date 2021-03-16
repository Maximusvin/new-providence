import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);

const imgRef = document.querySelector('.swiper-pagination');
const imgArr = imgRef.children;

const swiper = new Swiper('.swiper-container', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'custom',
    bulletClass: 'swiper_pagination_img',
    bulletActiveClass: 'swiper_pagination_img-active',
    renderCustom: function (swiper, current, total) {
      imgArr.forEach(item => {
        item.classList.remove('swiper_pagination_img-active');
      });
      imgArr[current-1].classList.add('swiper_pagination_img-active');
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
