const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.nav-bar')
const closeBtn = document.querySelector('.close-btn')

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
})

closeBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
});