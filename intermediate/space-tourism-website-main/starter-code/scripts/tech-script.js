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
