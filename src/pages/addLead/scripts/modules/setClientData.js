import { dealClientComment, dealCompany, dealMail, dealTel } from '.';

export const setClientData = (clients, cont, input) => {
  const contList = cont.querySelector('ul');

  clients.forEach(item => {
    contList.insertAdjacentHTML('beforeend', `
        <li data-hash="${item.hash}">${item.name}</li>
    `);
  });

  input.onclick = () => {
    cont.classList.toggle('open');
  };

  contList.onclick = (e) => {
    const hash = e.target.dataset.hash;
    const content = e.target.textContent;
    const currentClient = clients.filter(item => item.hash === hash)[0];
    input.value = content.trim();
    input.dataset.hash = hash;
    cont.classList.remove('open');
    dealCompany.value = currentClient.company;
    dealTel.value = currentClient.phone;
    dealMail.value = currentClient.email;
    dealClientComment.value = currentClient.comment;
  };
};