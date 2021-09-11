import toastr from 'toastr';

import { base } from '../../../constants';
import { signUpValidator } from './validators/signUp';

export const api = Object.freeze({
  signUp: {
    fetch: async ({ name, email, phone, password }) => {
      const user = { name, email, phone, password };
      const isValid = signUpValidator(user);
      console.log(name, email, phone, password);

      if (!isValid) {
        const message = 'Форма заполнена не верно. Проверьте правильность заполнения полей, а так же убедитесь что пароль не короче 8 символов';
        
        toastr.error(message, 'Ошибка!');
        console.error(signUpValidator.errors);
        throw new Error(message);
      }

      const response = await fetch(`${base}/register`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if(!response.ok) {
        const { message } = await response.json();

        toastr.error(message, 'Ошибка!');
        throw new Error(message);
      }

      const { data } = await response.json();
      localStorage.setItem('token', data); 

      window.location.href = 'dashboard.html';
    },
  },
});