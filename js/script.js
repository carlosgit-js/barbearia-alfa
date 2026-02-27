const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menu')
const header = document.getElementById('header')


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    menu.classList.toggle('active')
    header.classList.toggle('active')
});