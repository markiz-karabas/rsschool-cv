/*--BURGER-MENU---*/ 
const burgerButton = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.header-menu');

burgerButton.addEventListener('click', function(event) {
    document.body.classList.toggle('--lock')
    burgerButton.classList.toggle('--active');
    burgerMenu.classList.toggle('--open');
});
const menuLinks = burgerMenu.querySelectorAll('a'); /*ДОБАВИТЬ КООРДИНАТЫ ПРОКРУТКИ*/
menuLinks.forEach(el => {
    el.addEventListener('click', () => {
        document.body.classList.remove('--lock')
        burgerButton.classList.remove('--active');
        burgerMenu.classList.remove('--open');
    });
})