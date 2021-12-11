const btnMenu = document.getElementById('btn');
const nav = document.querySelector('.ul')

let holat = false;
btnMenu.addEventListener('click', (e) => {
    e.preventDefault();
    if (!holat) {
        nav.style.display = 'block'; holat = true;
    }
    else {
        nav.style.display = 'none'; holat = false;
    }
})