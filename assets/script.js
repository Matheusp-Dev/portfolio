let isMenuOpen = false;

const menuButton = document.querySelector('.menu-btn');
const headerLinks = document.querySelectorAll('header a');

menuButton.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;

    if(isMenuOpen){
        menuButton.classList.add('open');
    } else {
        menuButton.classList.remove('open');
    }
});

headerLinks.forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        menuButton.classList.remove('open');
    });
});