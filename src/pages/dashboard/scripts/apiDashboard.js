import {base} from '../../../constants';
import toastr from 'toastr';


export const apiDash = Object.freeze({
  leads: async (token, limit, page) => {
    const response = await fetch(`${base}/leads?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {'x-token': token},
    });
    const { data } = await response.json();
    return data;
  },
  colleagues: async (token, limit, page) => {
    const response = await fetch(`${base}/users?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {'x-token': token},
    });
    const { data } = await response.json();
    return data;
  },

  clients: async (token, limit, page) => {
    const response = await fetch(`${base}/clients?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {'x-token': token},
    });
    const { data } = await response.json();
    return data;
  },
});
