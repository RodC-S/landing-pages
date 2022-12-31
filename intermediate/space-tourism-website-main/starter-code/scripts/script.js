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

const crewList = document.querySelectorAll('.crew-nav button');
const crew = document.querySelectorAll('body.crew-page section');

crewList.forEach((itemList) => {
    itemList.addEventListener('click', () => {
        const eleCrew = itemList.getAttribute('class').split(' ')[0];
        crew.forEach((item) => {
            item.classList.remove('active');
        })
        crew.forEach((item) => {
            if (item.getAttribute('class') == eleCrew) {
                item.classList.add('active');
            }
        })
    })
})

const techList = document.querySelectorAll('.tech-nav button');
const tech = document.querySelectorAll('body.tech-page section');

techList.forEach((itemList) => {
    itemList.addEventListener('click', () => {
        const eleCrew = itemList.getAttribute('class').split(' ')[0];
        tech.forEach((item) => {
            item.classList.remove('active');
        })
        tech.forEach((item) => {
            if (item.getAttribute('class') == eleCrew) {
                item.classList.add('active');
            }
        })
    })
})