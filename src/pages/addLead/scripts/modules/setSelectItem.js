export const setSelectItem = (clients, cont, input) => {
  const contList = cont.querySelector('ul');
  // if (clients.length) input.value = clients[0].name || clients[0].manager;

  clients.forEach(item => {
    contList.insertAdjacentHTML('beforeend', `
        <li data-hash="${item.hash}">${item.name || item.title}</li>
    `);
  });

  cont.firstElementChild.onclick = () => {
    cont.classList.toggle('open');
  };

  contList.onclick = (e) => {
    const hash = e.target.dataset.hash;
    const content = e.target.textContent;
    input.value = content.trim();
    input.dataset.hash = hash;
    cont.classList.remove('open');
  };
};