import { api } from './api';

const isLoggedOut = !location.pathname.includes('/index') && !location.pathname.includes('/sign-up') && location.pathname !== '/';
const isLoggedIn = location.pathname.includes('/index') || location.pathname.includes('/sign-up') || location.pathname === '/';

export const verifyToken = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      await api.verifyToken(token);
      if (isLoggedIn) {
        location.href = 'dashboard.html';
      }
    } catch (error) {
      if (!isLoggedOut) {
        location.href = 'index.html';
      }
      localStorage.removeItem('token');
    }
  } else {
    if (isLoggedOut) {
      location.href = 'index.html';
    }
  }
};
