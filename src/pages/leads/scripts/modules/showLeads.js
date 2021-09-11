import {leadColors} from '../../../globalModules';

export const showLeads = (leads, leadName, data) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  let out = `
    <div class="tasks__column">
      <div class="column__header flex">
        <h2>${leadName} <span id="newCount" class="count">${leads.length}</span></h2>
        <img src="img/icon/icons-edit.svg" alt="" class="column__control">
        <img src="img/icon/icons-delete.svg" alt="" class="column__control">
            <div class="btn__add__task">
              <img src="img/icon/plus.svg" alt="">
            </div>
      </div>
      <div data-id="${data}" class="task task__dnd show"></div>
    `;

  leads.forEach((item, i) => {
    out =`${out}
       <div class="task task__block ${leadColors[item.status]} draggableElement" 
            data-num=${i} 
            data-hash=${item.hash} 
            data-leadname=${data} draggable="true">
    			<h2 class="task__title">${item.title}</h2>
    			<p class="task__deadline">Закрыть до:
    			  <span>${new Date(item.deadline).toLocaleString('ru-Ru', options)}</span>
    			</p>
    			<div class="task__executor flex">
    				<img src="img/icon/ava-empty.svg" class="executor__img" alt="">
    				<p class="executor__name">${item.manager}</p>
    			</div>
    			<img src="img/icon/icons-delete.svg" class="remove__icon" alt="">

    			<p class="price">$${item.amount}</p>
    		</div>

    `;
  });
  return `${out}</div>`;
};
