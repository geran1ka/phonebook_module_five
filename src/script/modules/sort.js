import {getStorage} from './localStorageServis';
import {renderContacts} from './renderElements';
import {getCounter as counter} from './function/getCounter';
import {addClassElem, changeClassElem} from './function/changeClassElem';
import {hoverRow as hover} from './function/hover';

const clickName = counter();
const clickSurName = counter();
const clickPhone = counter();
// Для подтягивания из localStorage значения click при обновлении страницы
const singleTriggerCondition = counter();

const sortData = (sort, title) => {
  let click = null;

  if ((+localStorage.getItem('click') === 1) && !singleTriggerCondition()) {
    click = +localStorage.getItem('click');
  } else {
    switch (sort) {
      case 'name':
        click = clickName();
        clickSurName.reset();
        clickPhone.reset();
        break;
      case 'surname':
        click = clickSurName();
        clickName.reset();
        clickPhone.reset();
        break;
      case 'phone':
        click = clickPhone();
        clickName.reset();
        clickSurName.reset();
        break;
    }
  }

  changeClassElem('.up', 'up', 'remove');
  changeClassElem('.down', 'down', 'remove');

  const data = getStorage(title);

  if (click % 2 === 0) {
    data.sort((a, b) => (a[sort] > b[sort] ? 1 : -1));
    changeClassElem(`.${sort}`, 'up', 'add');
    localStorage.setItem('click', 0);
  } else {
    data.sort((a, b) => (a[sort] > b[sort] ? -1 : 1));
    changeClassElem(`.${sort}`, 'down', 'add');
    localStorage.setItem('click', 1);
  }
  singleTriggerCondition();
  return data;
};

const sortControl = (listTitle, list, title, logoTitleReset) => {
  listTitle.addEventListener('click', (e) => {
    const target = e.target;
    changeClassElem('.delete', 'is-visible', 'remove');

    if (target.closest('th') && !target.closest('.th-edit')) {
      const sortKey = target.dataset.sort;
      renderContacts(list, sortData(sortKey, title));
      logoTitleReset();
      hover();
      localStorage.setItem('sort', sortKey);
    }
  });
};

export {
  addClassElem,
  changeClassElem,
  sortData,
  sortControl,
};

