import {api} from '../api';

import {priorityCont, dealPriority, setSelectItemsWithImg} from '.';
import {leadColors} from '../../../globalModules';


export const getPriorities = async (token) => {
  try {
    const priorities = await api.loadPriorities(token);
    const contList = priorityCont.querySelector('ul');
    priorities.forEach(item => {
      contList.insertAdjacentHTML('beforeend', `
        <li  data-hash="${item.hash}">
            <div class="priority__circle ${leadColors[item.name] || 'blue'}"></div>${item.name}
        </li>
    `);
    });
    setSelectItemsWithImg(priorityCont, contList, dealPriority);
  } catch (error) {
    console.log(error.message);
  }
};
