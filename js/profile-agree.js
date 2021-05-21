const form_agree = document.querySelector('.delete-agree'),
  agree = form_agree.querySelector('.js-agree'),
  delete_btn = form_agree.querySelector('.js-disabled');

function handleChange(envet) {
  if (agree.checked) {
    delete_btn.disabled = false;
    delete_btn.classList.remove('disabled');
  } else {
    delete_btn.disabled = true;
    delete_btn.classList.add('disabled');
  }
}

function init() {
  agree.addEventListener('change', handleChange);
}
init();
