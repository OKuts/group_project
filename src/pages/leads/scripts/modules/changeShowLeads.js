import {showLeads} from './showLeads';
import { leadsWrap } from './elements';
import {api} from '../api';

const stageNames = {
  new: 'Новые сделки',
  inProgress: 'На стадии завершения',
  done: 'Закрытые',
};

export const changeShowLeads = (leadsSort) => {
  let temp;
  Object.getOwnPropertyNames(leadsSort).reverse().forEach(item => {
    leadsWrap.insertAdjacentHTML('afterbegin', showLeads(leadsSort[item], stageNames[item], item));
  });
  const dndList = document.querySelectorAll('.task__dnd');
  const draggableElementList = leadsWrap.querySelectorAll('.draggableElement');

  dndList.forEach(item => {
    item.addEventListener('dragover', (e) => {
      e.preventDefault();
      // console.log(e.target.dataset.id);
    });

    item.addEventListener('drop', async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const num = e.dataTransfer.getData('num');
      const leadName = e.dataTransfer.getData('leadName');
      const hash = e.dataTransfer.getData('hash');
      const pipeline = e.target.dataset.id;
      const [selectedElement] = leadsSort[leadName].splice(num, 1);
      leadsSort[pipeline].unshift(selectedElement);
      try {
        await api.updateLead(token, pipeline, hash);
        leadsWrap.innerHTML = '';
        changeShowLeads({ ...leadsSort });
      } catch (error) {
        console.error(error.message);
      }
    });
  });

  draggableElementList.forEach(item => {
    item.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('hash', e.target.dataset.hash);
      e.dataTransfer.setData('num', e.target.dataset.num);
      e.dataTransfer.setData('leadName', e.target.dataset.leadname);
    });
  });
};

