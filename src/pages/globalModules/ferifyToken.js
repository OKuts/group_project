import { api } from './api';

export const verifyToken = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      await api.verifyToken(token);
      if (location.pathname === '/' || location.pathname === '/sign-up.html') location.href = '/dashboard.html';
    } catch (error) {
      localStorage.removeItem('token');
      location.href = '/';
    }
  } else {
    if (location.pathname !== '/' && location.pathname !== '/sign-up.html') location.href = '/';
  }
};
