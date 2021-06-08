const input_all = document.querySelectorAll('.js-input');

const ERROR_TEXT = 'error-text';
const ERROR_INPUT = 'error-input';
const FLEX_TEXT = 'flex-text';

for (let index = 0; index < input_all.length; index++) {
  const input = input_all[index];

  input.addEventListener('keyup', event => {
    if (input.value === '') {
      console.log(index + ' ' + input.value);
      document.querySelector('.js-label-' + index).classList.add(ERROR_TEXT);
      document.querySelector('.js-input-' + index).classList.add(ERROR_INPUT);
      document.querySelector('.js-label-' + index).classList.remove(FLEX_TEXT);
      document.querySelector('.js-errortext-' + index).classList.remove('non-showing');
    } else {
      document.querySelector('.js-label-' + index).classList.add(FLEX_TEXT);
      document.querySelector('.js-label-' + index).classList.remove(ERROR_TEXT);
      document.querySelector('.js-input-' + index).classList.remove(ERROR_INPUT);
      document.querySelector('.js-errortext-' + index).classList.add('non-showing');
    }
  });

  input.addEventListener('invalid', event => {
    document.querySelector('.js-label-' + index).classList.add(ERROR_TEXT);
    document.querySelector('.js-input-' + index).classList.add(ERROR_INPUT);
    document.querySelector('.js-label-' + index).classList.remove(FLEX_TEXT);
    document.querySelector('.js-errortext-' + index).classList.remove('non-showing');
  });
}
