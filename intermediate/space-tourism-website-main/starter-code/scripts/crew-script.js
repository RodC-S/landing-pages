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
