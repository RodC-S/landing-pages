const btnMenu = document.querySelector('.menu-button');
const menuNav = document.querySelector('.main-nav');

const subCategory = document.querySelector('.menu-container')
const activeLists = document.querySelectorAll('.menu-container > li')
const subMenu = document.querySelector('.submenu')


btnMenu.addEventListener('click', (e) => {
    menuNav.classList.toggle('active');
    e.target.classList.toggle('active');
});

subCategory.addEventListener('click', (e) => {
    for (const list of activeLists) {
        
        if (e.target.parentNode.getAttribute('class') ==='active') {
            break;
        } else if (list.getAttribute('class') === 'active') {
            list.classList.toggle('active');
        }
    }
    e.target.parentNode.classList.toggle('active');
})