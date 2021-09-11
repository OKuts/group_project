import toastr from 'toastr';
import {base} from '../../constants';

export const api = Object.freeze({
  async verifyToken(token) {
    const response = await fetch(`${base}/auth`, {
      method: 'GET',
      headers : {
        'x-token': token,
      },
    });
    return response;
  },
  async getUserName(token) {
    const response = await fetch(`${base}/profile`, {
      method: 'GET',
      headers: {
        'x-token': token,
      },
    });

    if(!response.ok) {
      const { message } = await response.json();
      toastr.error(message, 'Ошибка!');
      localStorage.removeItem('token');
      location.href = '/';
      throw new Error(message);
    }

    const { data } = await response.json();

    return data;
  },
});
