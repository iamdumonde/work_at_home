'use strict '

document.addEventListener('DOMContentLoaded', function () {

    const menuHamburger = document.querySelector('.menu-hamburger');
    console.log(menuHamburger);
    const navLinks = document.querySelector('.nav-links');
    console.log(navLinks);

    menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu')
    })
})
