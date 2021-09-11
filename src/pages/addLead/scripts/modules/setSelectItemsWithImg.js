import {leadColors} from '../../../globalModules/leadColors';

export const setSelectItemsWithImg = (cont, contList, input) => {
  cont.firstElementChild.onclick = () => {
    cont.classList.toggle('open');
  };

  contList.onclick = (e) => {
    let hash = e.target.dataset.hash;
    let content = e.target.textContent.trim();
    if (!hash) {
      hash = e.target.parentElement.dataset.hash;
      content = e.target.parentElement.textContent;
    }
    const circle = input.previousElementSibling;
    if (circle.tagName === 'DIV') {
      circle.removeAttribute('class');
      circle.setAttribute('class',`priority__circle ${leadColors[content] || 'blue'}`);
    }
    input.value = content.trim();
    input.dataset.hash = hash;
    cont.classList.toggle('open');
  };
};