(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+Qb":function(e,t){document.querySelector(".plan__btn-wrap");var c=document.querySelector(".plan__btn--individual"),a=document.querySelector(".plan__btn--company"),o=(document.querySelector(".plan__tariffs-wrap"),document.querySelector(".plan__card--free")),n=document.querySelector(".plan__card--pro"),r=document.querySelector(".plan__card--business"),i=document.querySelector(".plan__card--ultra");function s(e){e.currentTarget.classList.contains("active")||(console.log(e.currentTarget),o.classList.toggle("active"),n.classList.toggle("active"),r.classList.toggle("active"),i.classList.toggle("active"))}c.addEventListener("click",(function(e){e.preventDefault(),e.target.classList.contains("active")||(c.classList.add("active"),a.classList.remove("active"),o.classList.add("show"),n.classList.add("show"),r.classList.remove("show"),i.classList.remove("show"))})),a.addEventListener("click",(function(e){e.preventDefault(),e.target.classList.contains("active")||(a.classList.add("active"),c.classList.remove("active"),r.classList.add("show"),i.classList.add("show"),o.classList.remove("show"),n.classList.remove("show"))})),o.addEventListener("click",s),n.addEventListener("click",s),r.addEventListener("click",s),i.addEventListener("click",s)},"Dv/5":function(e,t,c){},QfWi:function(e,t,c){"use strict";c.r(t);c("1UZS"),c("0iy3"),c("Dv/5");var a=c("s4xb"),o=c.n(a);c("+4VZ");o.a.init({offset:200,duration:1200});c("8+Qb");var n=c("Mfn4"),r=(c("16fh"),new n.a(".interface__slider",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:0,loop:!0}),c("3dw1"),c("o7Cm")),i=c("NcGS");n.a.use([r.a,i.a]);var s=document.querySelector(".swiper-pagination").children,l=(new n.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0,type:"custom",bulletClass:"swiper_pagination_img",bulletActiveClass:"swiper_pagination_img-active",renderCustom:function(e,t,c){s.forEach((function(e){e.classList.remove("swiper_pagination_img-active")})),s[t-1].classList.add("swiper_pagination_img-active")}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),c("WNqX"),c("5Zwl")),u=c.n(l),d=(document.querySelector("back2Top"),document.querySelector("html")),m=document.querySelector(".main-scrollUp");window.addEventListener("scroll",u()((function(){d.scrollTop>20?m.style="opacity:1":m.style="opacity:0"}),150)),m.addEventListener("click",(function(){d.scrollTop=0,console.log("click")}));var v,p=document.querySelector("#header-btn"),L=document.querySelector("#mobile-menu-btn"),f=document.querySelector("#my-video-modal"),g=document.querySelector("#mobile-menu"),b=document.querySelectorAll(".modal-close-btn"),y=document.querySelectorAll(".modal-area-bgd"),w=document.querySelectorAll(".modal-area-content");!function(){w.length&&w.forEach((function(e){e.addEventListener("click",(function(e){return e.stopPropagation()}))}));y.length&&y.forEach((function(e){e.addEventListener("click",q)}))}(),(v=document.querySelectorAll(".mobile-menu-item")).length&&v.forEach((function(e){e.addEventListener("click",(function(){return setTimeout(q,150)}))}));var S=[g,f];function q(){var e=document.querySelector(".modal-active");e&&(e.classList.remove("modal-active"),document.body.classList.remove("body-scroll-disable"));var t=document.querySelector("video");t&&t.pause()}[L,p].forEach((function(e,t){var c=S[t];e&&e.addEventListener("click",(function(e){e.preventDefault(),c.classList.add("modal-active"),document.body.classList.add("body-scroll-disable")}))})),b.forEach((function(e){e.addEventListener("click",q)}));c("SgDD");var _=document.querySelector(".callback-form__container"),k=document.querySelector("#request-received"),E=document.querySelector("#callback-form-input-email");_.addEventListener("submit",(function(e){e.preventDefault();var t,c=!1;E.value.trim()&&(t=E.value,/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t.toLowerCase()))?(_.classList.remove("callback-form-input-error"),E.classList.remove("callback-form-input-error")):(_.classList.add("callback-form-input-error"),E.classList.add("callback-form-input-error"),c=!0),c||(E.value="",k.classList.add("modal-active"),setTimeout((function(){k.classList.remove("modal-active")}),2e3))}))},WNqX:function(e,t){var c={burger:document.querySelector("#burger"),menu:document.querySelector(".menu"),menuWrap:document.querySelector(".menu-wrap"),logoTablet:document.querySelector(".header__logo-tablet")};function a(e){c.burger.classList.remove("active"),c.menuWrap.classList.remove("active"),document.body.classList.remove("lock")}c.burger.addEventListener("click",(function(e){e.preventDefault(),e.currentTarget.classList.toggle("active"),c.menuWrap.classList.toggle("active"),document.body.classList.toggle("lock")})),c.menuWrap.addEventListener("click",a),c.logoTablet.addEventListener("click",a)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.5c0bc41ed1b1e0ec340e.js.map