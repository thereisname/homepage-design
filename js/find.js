const div_id = document.querySelector('.js-find__id'),
  text_id = div_id.querySelector('.js-text'),
  box_id = div_id.querySelector('.js-find-box');
const div_pw = document.querySelector('.js-find__pw'),
  text_pw = div_pw.querySelector('.js-text'),
  box_pw = div_pw.querySelector('.js-find-box');

function handleIDClick() {
  box_id.classList.toggle('non-showing');
  box_pw.classList.add('non-showing');
  text_id.classList.toggle('find-text__click');
  text_pw.classList.remove('find-text__click');
}
function handlePwClick() {
  box_pw.classList.toggle('non-showing');
  box_id.classList.add('non-showing');
  text_pw.classList.toggle('find-text__click');
  text_id.classList.remove('find-text__click');
}

function init() {
  text_id.addEventListener('click', handleIDClick);
  text_pw.addEventListener('click', handlePwClick);
}

init();
