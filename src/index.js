import {renderPhoneBook, renderContacts} from './script/modules/renderElements.js';
import {getStorage} from './script/modules/localStorageServis.js';
import cloneObj from './script/modules/function/cloneObj.js';
import * as sort from './script/modules/sort.js';
import {modalControl, formControl, deleteControl, edit} from './script/modules/control.js';
import {hoverRow as hover} from './script/modules/function/hover.js';

{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);

    const {
      listTitle,
      list,
      logo,
      btnAdd,
      formOverlay,
      form,
      btnDel,
    } = renderPhoneBook(app, title);

    const data = getStorage(title);
    const {closeModal, openModal} = modalControl(btnAdd, formOverlay);
    const logoAlt = cloneObj(logo);
    const logoTitleReset = () => logo.textContent = logoAlt.textContent;

    if (localStorage.getItem('sort')) {
      renderContacts(list, sort.sortData(localStorage.getItem('sort'), title));
    } else {
      renderContacts(list, data);
    }

    hover();
    deleteControl(btnDel, list, title, logoTitleReset);
    sort.sortControl(listTitle, list, title, hover, logoTitleReset);
    formControl(form, title, list, closeModal, hover);
    edit(list, openModal, title, form, logoTitleReset);
  };

  window.phoneBookInit = init;
}
