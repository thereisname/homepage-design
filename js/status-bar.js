const header = document.querySelector('header'),
  offcanvasTop_btn = header.querySelector('#offcanvasTop'),
  offcanvas_body = header.querySelector('.js-offcanvas-body'),
  dropdown_menu = header.querySelector('.js-dropdown-menu');

const SMALL = 640;
const FLEX = 'flex';
const OFFCANVAS = 'offcanvas';
const OFFCANVAS_TOP = 'offcanvas-top';
const OFFCANVAS_BODY = 'offcanvas-body';
const DROPDOWN_MENU = 'dropdown-menu';

function handleResize() {
  const width = window.innerWidth;
  if (width <= SMALL) {
    offcanvasTop_btn.classList.add(OFFCANVAS, OFFCANVAS_TOP);
    offcanvas_body.classList.add(OFFCANVAS_BODY);
    dropdown_menu.classList.add(DROPDOWN_MENU);
    dropdown_menu.classList.remove(FLEX);
  } else {
    offcanvasTop_btn.classList.remove(OFFCANVAS, OFFCANVAS_TOP);
    offcanvas_body.classList.remove(OFFCANVAS_BODY);
    dropdown_menu.classList.remove(DROPDOWN_MENU);
    dropdown_menu.classList.add(FLEX);
  }
}

function init() {
  handleResize();
  window.addEventListener('resize', handleResize);
}

init();
