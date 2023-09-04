// ============  SHOW MENU ========== //

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


  
// ============   MENU SHOW ========== //
/* Validate if const exists */

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


// ============   MENU HIDDEN ========== //
/* Validate if const exists */


if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}



// ============   REMOVE MENU MOBILE ========== //

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    
    //when we click on each nav__link, we remove the show menu class
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// ============ CHANGE BACKGROUND HEADER   ========== //

const bgHeader = () => {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewpoint height,add the bg-header class
    
    this.scrollY >= 50 ? header.classList.add('bg-header')
                      : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)



// ============ CHANGE BACKGROUND HEADER   ========== //

gsap.from('.home__image-2', 1.2, {opacity: 0, y:200, delay: .1})
gsap.from('.home__image-3', 1.2, {opacity: 0, y:200, delay: .5})
gsap.from('.home__data', 1.2, {opacity: 0, y:-60, delay: 1})
gsap.from('.home__bird-1', 1.2, {opacity: 0,x:-80, y:200, delay: 1.1})
gsap.from('.home__bird-2', 1.2, {opacity: 0,x:80, delay: 1.2})
gsap.from('.home__image-1', 1.2, {opacity: 0, y:200, delay: 1.2})
gsap.from('.home__image-4', 1.2, {opacity: 0,x:200, delay: 1.3})