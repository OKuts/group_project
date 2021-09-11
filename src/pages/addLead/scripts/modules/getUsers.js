import { api } from '../api';
import { executorCont, dealExecutor, setSelectItemsWithImg } from '.';

export const getUsers = async (token) => {
  try {
    const { docs } = await api.loadUsers(token, 5, 1);
    const contList = executorCont.querySelector('ul');
    docs.forEach(item => {
      contList.insertAdjacentHTML('beforeend', `
        <li data-hash="${item.hash}">
            <img src="img/icon/ava-empty.svg" alt="" class="executor__img}">
            ${item.name}
        </li>
    `);
    });
    setSelectItemsWithImg(executorCont, contList, dealExecutor);

  } catch (error) {
    console.error(error.message);
  }
};