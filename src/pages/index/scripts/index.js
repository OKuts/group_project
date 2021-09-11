import '../../../css/style.scss';
import { api } from './api';
import { verifyToken } from '../../globalModules/ferifyToken';

verifyToken();

const formInputs = document.querySelectorAll('.form form input');
const form = document.querySelector('.form form');

for (const input of formInputs) {
  if (input.type !== 'submit') {
    input.addEventListener('input', (event) => {
      if (event.target.value && event.target.value.length) {
        event.target.classList.add('filled');
      } else {
        event.target.classList.remove('filled');
      }
    });
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const email = formData.get('email');
  const password = formData.get('password');

  await api.login.fetch({ email, password });
});