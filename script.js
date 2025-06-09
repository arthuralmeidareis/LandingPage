document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menu && navMenu) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('ativo');
            navMenu.classList.toggle('ativo');
        });
    }
});
