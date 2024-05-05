const BURGER_OPENED_CLASSNAME = 'burger_open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';
const BODY_FIXED_CLASSNAME_burger = 'body_fixed';

const bodyNode_burger = document.querySelector('body');
const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector('.js-burger__content');
const navBurger = document.querySelector(".nav-burger");

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode_burger.classList.toggle(BODY_FIXED_CLASSNAME_burger);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);

    const isOpened = burgerBtnNode.classList.contains(BURGER_BTN_OPENED_CLASSNAME);
    const newImageSrc = isOpened ? './resources/img/close-popup.svg' : './resources/img/burger-btn.svg';
    burgerBtnNode.src = newImageSrc;
}

navBurger.addEventListener("click", (event) => {
    if (event.target.tagName = 'a') {
        toggleBurger()
        
    }
})