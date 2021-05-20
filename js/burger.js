const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    humburgerElem.classList.toggle('humburger-menu-active');
};

const closeMenu = (event) => {
    menuElem.classList.remove('menu-active');
    humburgerElem.classList.remove('humburger-menu-active');
};

// переключаем hamburger-menu
humburgerElem.addEventListener('click', toggleMenu);

menuElem.addEventListener('click', (event) => {
    const target = event.target;
    // в случае нажатия на пункт меню (ссылку) - закрываем меню
    if(target.classList.contains('menu-list__link')) {
        closeMenu();
    }
});