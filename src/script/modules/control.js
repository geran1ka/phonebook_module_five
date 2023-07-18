import {addClassElem, changeClassElem} from './function/changeClassElem';
import {removeStorage, getStorage, addContactData} from './localStorageServis';
import {addContactPage} from './createElements';


const modalControl = (btnAdd, formOverlay) => {
  const openModal = () => {
    addClassElem(formOverlay, 'is-visible');
    changeClassElem('.delete', 'is-visible', 'remove');
  };

  const closeModal = () => {
    formOverlay.classList.remove('is-visible');
  };

  btnAdd.addEventListener('click', openModal);

  formOverlay.addEventListener('click', (e) => {
    const target = e.target;
    if (target === formOverlay || target.closest('.close')) {
      closeModal();
    }
  });
  return {
    closeModal,
    openModal,
  };
};

const deleteControl = (btnDel, list, title, logoTitleReset) => {
  btnDel.addEventListener('click', () => {
    changeClassElem('.delete', 'is-visible', 'toggle');
  });

  list.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.del-icon')) {
      const tr = target.closest('.contact');
      const phone = tr.querySelector('.phone').textContent;
      tr.remove();
      removeStorage(phone, title);
    }
    if (!document.querySelector('.contact')) {
      logoTitleReset();
      localStorage.removeItem('sort');
      changeClassElem('.up', 'up', 'remove');
      changeClassElem('.down', 'down', 'remove');
      changeClassElem('.delete', 'is-visible', 'remove');
    }
  });
};

const formControl = (form, title, list, closeModal, hoverRow) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newContact = Object.fromEntries(formData);

    addContactData(title, newContact);
    addContactPage(newContact, list);
    form.reset();
    closeModal();
    hoverRow();
  });
};

const edit = (list, openModal, title, form, logoTitleReset) => {
  list.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.button-table')) {
      openModal();
      const tr = target.closest('.contact');
      const phone = tr.querySelector('.phone').textContent;
      const data = getStorage(title);
      const editContact = data.find(item => item.phone === phone);
      form.name.value = editContact.name;
      form.surname.value = editContact.surname;
      form.phone.value = editContact.phone;
      removeStorage(phone, title);
      tr.remove();
      logoTitleReset();
    }
  });
};

export {
  modalControl,
  deleteControl,
  formControl,
  edit,
};
