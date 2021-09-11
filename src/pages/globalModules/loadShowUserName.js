import {api} from './api';

export const loadShowUserName = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const profile = await api.getUserName(token);
      localStorage.setItem('profile', JSON.stringify(profile));
      document.querySelector('.profile__name').textContent = profile.name;
      document.querySelector('.profile__email').textContent = profile.email;
    } catch (error) {
      console.log(error.message);
    }
  }
};
