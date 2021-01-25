let mobileMenu = document.querySelector('.header__menu');
let menuOpen = document.querySelector('.header__switch-open');
let menuClose = document.querySelector('.header__switch-close');

// Прячу меню на мобильном разрешении

mobileMenu.classList.remove('header__menu--visible');
mobileMenu.classList.add('header__menu--invisible');
menuOpen.classList.remove('header__switch-open--invisible');
menuOpen.classList.add('header__switch-open--visible');
menuClose.classList.add('header__switch-close--invisible');
menuClose.classList.remove('header__switch-close--visible');


// Работа бургер меню

menuOpen.onclick = function (evt) {
    evt.preventDefault;
    mobileMenu.classList.add('header__menu--visible');
    mobileMenu.classList.remove('header__menu--invisible');
    menuOpen.classList.add('header__switch-open--invisible');
    menuOpen.classList.remove('header__switch-open--visible');
    menuClose.classList.remove('header__switch-close--invisible');
    menuClose.classList.add('header__switch-close--visible');
}

menuClose.onclick = function (evt) {
    evt.preventDefault;
    mobileMenu.classList.remove('header__menu--visible');
    mobileMenu.classList.add('header__menu--invisible');
    menuOpen.classList.remove('header__switch-open--invisible');
    menuOpen.classList.add('header__switch-open--visible');
    menuClose.classList.add('header__switch-close--invisible');
    menuClose.classList.remove('header__switch-close--visible');
}
