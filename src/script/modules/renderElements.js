import {
  createHeader,
  createLogo,
  createMain,
  createButtonGroup,
  createFooter,
  createTable,
  createForm,
  createRow,
} from './createElements.js';


const renderPhoneBook = (app, title) => {
  const header = createHeader();
  const logo = createLogo(title);
  const main = createMain();
  const footer = createFooter(title);
  const buttonGroup = createButtonGroup([
    {
      className: 'btn btn-primary mr-3',
      type: 'button',
      text: 'Добавить',
    },
    {
      className: 'btn btn-danger',
      type: 'button',
      text: 'Удалить',
    },
  ]);

  const table = createTable();
  const {form, overlay} = createForm();

  header.headerContainer.append(logo);
  main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
  app.append(header, main, footer);

  return {
    listTitle: table.thead,
    list: table.tbody,
    logo,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverlay: overlay,
    form,
  };
};

const renderContacts = (elem, data) => {
  elem.textContent = '';
  const allRow = data.map(item => createRow(item));
  elem.append(...allRow);
  return allRow;
};

export {
  renderPhoneBook,
  renderContacts,
};
