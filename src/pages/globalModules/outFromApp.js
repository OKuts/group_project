export const outFromApp = () => {
  const outElement = document.querySelector('.logout__btn');
  outElement.onclick = () => {
    localStorage.removeItem('token');
    location.href = '/';
  };
};