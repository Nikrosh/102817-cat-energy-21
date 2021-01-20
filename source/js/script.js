let mobileMenu = document.querySelector('.header__menu');
let menuOpen = document.querySelector('.header__switch-open');
let menuClose = document.querySelector('.header__switch-close');


// Бургер меню

menuOpen.onclick = function (evt) {
    evt.preventDefault;
    mobileMenu.style = 'display: block;';
    menuOpen.style = 'display: none;';
    menuClose.style = 'display: block;';
}

menuClose.onclick = function (evt) {
    evt.preventDefault;
    mobileMenu.style = 'display: none;';
    menuOpen.style = 'display: block;';
    menuClose.style = 'display: none;';
}
