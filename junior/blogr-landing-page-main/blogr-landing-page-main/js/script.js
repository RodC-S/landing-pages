const btnMenu = document.querySelector('.menu-button');
const menuNav = document.querySelector('.main-nav');

const subCategory = document.querySelector('.menu-container')
const subMenu = document.querySelector('.submenu')


btnMenu.addEventListener('click', (e) => {
    menuNav.classList.toggle('active');
    e.target.classList.toggle('active');
});

subCategory.addEventListener('click', (e) => {
    e.target.parentNode.classList.toggle('active')
})