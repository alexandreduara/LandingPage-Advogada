const buttonMenu = document.querySelector(".navbar__button--menu--2");
const buttonMenu2 = document.querySelector(".navbar__button--menu");
const menu= document.querySelector(".navbar");
const navbar2= document.querySelector(".navbar--2");

buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('navbar--active')
    navbar2.classList.toggle('navbar--off')
})

buttonMenu2.addEventListener('click', () => {
    menu.classList.toggle('navbar--active')
    navbar2.classList.toggle('navbar--off')
})