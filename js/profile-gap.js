const phone_number = document.querySelector('.js-number'),
  input = phone_number.querySelector('.js-click'),
  gap = phone_number.querySelector('.js-gap');

function handleAddGap() {
  gap.classList.add('gap-1');
}
function handleRemoveGap() {
  gap.classList.remove('gap-1');
}

function init() {
  input.addEventListener('focus', handleAddGap);
  input.addEventListener('blur', handleRemoveGap);
}

init();
