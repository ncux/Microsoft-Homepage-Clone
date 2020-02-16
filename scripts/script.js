const menuButton = document.querySelector('.menu-button');
const mainMenu = document.querySelector('.main-menu');

menuButton.addEventListener('click', showMainMenu);

function showMainMenu() {
    mainMenu.classList.toggle('show');
}