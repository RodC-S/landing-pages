const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.nav-bar')
const closeBtn = document.querySelector('.close-btn')

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
})

closeBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
});

const destList = document.querySelectorAll('.dest-nav li');
const dest = document.querySelectorAll('body.dest-page section');

destList.forEach((itemList) => {
    itemList.addEventListener('click', () => {
        const eleDestiny = itemList.getAttribute('class').split(' ')[0];
        dest.forEach((item) => {
            item.classList.remove('active');
        })
        dest.forEach((item) => {
            if (item.getAttribute('class') == eleDestiny) {
                item.classList.add('active')
            }
        })
    })
})