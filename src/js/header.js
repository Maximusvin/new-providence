const burgerRef = document.querySelector('.header__burger')
const headerMenuRef = document.querySelector('.header__menu')
const headerNavigationRef = document.querySelector('.header__navigation')
const menuListRef = document.querySelector('.header__menu-list')
const infoListRef = document.querySelector('.header__info-list')
const headerLogoRef = document.querySelector('.header__logo')
const headerBtnRef = document.querySelector('.header__info-btn')
const headerCloseBtn = document.querySelector('.header__close-btn')
const initialWidth = window.innerWidth

const windowResize = window.addEventListener('resize',event=>{
    if(event.target.innerWidth<=710){
        burgerRef.addEventListener('click',() =>{
            burgerRef.classList.add('active')
            burgerRef.classList.add('hidden')
            headerMenuRef.classList.add('active')
            headerNavigationRef.classList.add('active')
            menuListRef.classList.add('active')
            infoListRef.classList.add('active')
            headerLogoRef.classList.add('active')
            headerBtnRef.classList.add('hidden')
            headerCloseBtn.classList.add('active')
        })
        headerCloseBtn.addEventListener('click',()=>{
            burgerRef.classList.remove('active')
            burgerRef.classList.remove('hidden')
            headerMenuRef.classList.remove('active')
            headerNavigationRef.classList.remove('active')
            menuListRef.classList.remove('active')
            infoListRef.classList.remove('active')
            headerLogoRef.classList.remove('active')
            headerBtnRef.classList.remove('hidden')
            headerCloseBtn.classList.remove('active')
        })
    }else if(event.target.innerWidth>710){
        console.log(`The window is bigger than 710px!`)
    }
})
