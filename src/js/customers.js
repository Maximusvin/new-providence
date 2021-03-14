const { default: Swiper } = require("swiper");

new Swiper('.swiper-container',{
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
      },
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    }
})


// const customersItemRef = document.querySelector('.customers__item')
// const customersItemRef =document.querySelector('.customers__item')
// const customersContentRef = document.querySelector('.customers__text-content')
// const customersItem1Ref = document.querySelector('.customer__item1')
// const customersContent1Ref = document.querySelector('.customers__text-content1')
// const customersItem3Ref = document.querySelector('.customer__item3')
// const customersContent3Ref = document.querySelector('.customers__text-content3')
// const customersArrowRef = document.querySelector('.customers__arrow')
// const customersArrowRightRef = document.querySelector('.customers__arrow-right')

// customersArrowRightRef.addEventListener('click', event=>{
//     customersItemRef.classList.remove('customers__active')
//     customersItemRef.classList.add('customers__half-hidden')
//     customersContent3Ref.classList.remove('customers__hidden')
//     customersItem3Ref.classList.add('customers__active')
// })


// const slideIndex = 1
// function plusSlide(){
//     showSlides(slideIndex+=1)
// }
// function minusSlide(){
//     showSlides(slideIndex-=1)
// }

// function showSlides(n){
//     let i;
//     let slides = document.querySelector('.customers__item')
//     if(n>slides.length){
//         slideIndex =1
//     } if(n<1){
//         slideIndex = slides.length
//     }
//     for(let i = 0; i<slides.length;i++){
//         slides[i].style.display ='none'
//     }
//     slides[slideIndex - 1].style.display = "block";
// }
