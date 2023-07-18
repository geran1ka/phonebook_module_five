import image from '../../img/icon.svg';

export const createImageLogo = () => {
  const img = document.createElement('img');
  img.src = image;
  return img;
}
// функция создания контейнера
const createContainer = () => {
  const container = document.createElement('div');
  container.classList.add('container');
  return container;
};
// функция создания header
const createHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const headerContainer = createContainer();
  header.append(headerContainer);
  header.headerContainer = headerContainer;

  return header;
};
// функция создания заголовка
const createLogo = title => {
  const h1 = document.createElement('h1');
  h1.classList.add('logo');
  h1.textContent = `Телефонный справочник. ${title}`;

  return h1;
};
// функция создания элемента main
const createMain = () => {
  const main = document.createElement('main');

  const mainContainer = createContainer();
  main.append(mainContainer);
  // привязка mainContainer к main
  main.mainContainer = mainContainer;

  return main;
};
// функция создания группы кнопок
const createButtonGroup = params => {
  const btnWrapper = document.createElement('div'); // создание обертки для кнопок
  btnWrapper.classList.add('btn-wrapper'); // добавление класса обертке для кнопок

  const btns = params.map(({className, type, text}) => {
    // создание кнопки
    const button = document.createElement('button');
    button.type = type; // добавление типа кнопки
    button.textContent = text; // добавление названия кнопки
    button.className = className; // добавление класса кнопки

    return button;
  });
  // вставка созданных кнопок в обертку для кнопок
  btnWrapper.append(...btns);

  return {
    btnWrapper,
    btns,
  };
};

const createTable = () => {
  const table = document.createElement('table');
  table.classList.add('table', 'table-striped');

  const thead = document.createElement('thead');
  thead.insertAdjacentHTML('beforeend', `
    <tr>
      <th class="delete">Удалить</th>
      <th class="name" data-sort="name">Имя</th>
      <th class="surname" data-sort="surname">Фамилия</th>
      <th class="phone" data-sort="phone">Телефон</th>
      <th class="th-edit">Редактировать</th>
    </tr>
  `);

  const tbody = document.createElement('tbody');

  table.append(thead, tbody);
  // добавление свойства tbody в эелемент table
  table.tbody = tbody;
  table.thead = thead;


  return table;
};

const createForm = () => {
  const overlay = document.createElement('div');
  overlay.classList.add('form-overlay');

  const form = document.createElement('form');
  form.classList.add('form');
  form.insertAdjacentHTML('beforeend', `
    <button class="close" type="button"></button>
    <h2 class="form-title">Добавить контакт</h2>
    <div class="form-group">
      <lable class="form-label" for="name">Имя</lable>
      <input class="form-input" name="name" id="name" type="text" required>
    </div>
    <div class="form-group">
      <lable class="form-label" for="surname">Фамилия</lable>
      <input class="form-input" name="surname" id="surname" type="text" required>
    </div>
    <div class="form-group">
      <lable class="form-label" for="name">Телефон</lable>
      <input class="form-input" name="phone" id="phone" type="number" required>
    </div>
  `);

  const buttonGroup = createButtonGroup([
    {
      className: 'btn btn-primary mr-3',
      type: 'submit',
      text: 'Добавить',
    },
    {
      className: 'btn btn-danger',
      type: 'reset',
      text: 'Отмена',
    },
  ]);
  form.append(...buttonGroup.btns);

  overlay.append(form);

  return {
    overlay,
    form,
  };
};

const createFooter = (title) => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const footerContainer = createContainer();
  footer.append(footerContainer);
  footer.footerContainer = footerContainer;

  const p = document.createElement('p');
  p.classList.add('footer-copyright');
  p.textContent = `Все права защищены ©${title}`;
  footerContainer.append(p);

  return footer;
};

const createRow = ({name: firstName, surname, phone}) => {
  const tr = document.createElement('tr');
  tr.classList.add('contact');

  const tdDel = document.createElement('td');
  tdDel.classList.add('delete');
  const buttonDel = document.createElement('button');
  buttonDel.classList.add('del-icon');
  tdDel.append(buttonDel);

  const tdName = document.createElement('td');
  // tdName.classList.add('name');
  tdName.textContent = firstName;

  const tdSurname = document.createElement('td');
  // tdSurname.classList.add('surname');
  tdSurname.textContent = surname;

  const tdPhone = document.createElement('td');
  const phoneLink = document.createElement('a');
  phoneLink.classList.add('phone');
  phoneLink.href = `tel:${phone}`;
  phoneLink.textContent = `${phone}`;
  tr.phoneLink = phoneLink;

  tdPhone.append(phoneLink);

  const tdEdit = document.createElement('td');
  tdEdit.classList.add('td-btn');
  const btnEdit = document.createElement('button');
  btnEdit.type = 'button';
  btnEdit.classList.add('button-table');
  btnEdit.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5629 4.86078L17.6394 6.93629L15.5629 4.86078ZM16.8982 3.03233L11.2834 8.64709C10.9933 8.9368 10.7955 9.3059 10.7148 9.70789L10.1962 12.304L12.7923 11.7844C13.1942 11.704 13.5629 11.5069 13.8531 11.2167L19.4678 5.60196C19.6366 5.43324 19.7704 5.23293 19.8617 5.01248C19.953 4.79203 20 4.55576 20 4.31714C20 4.07853 19.953 3.84225 19.8617 3.6218C19.7704 3.40136 19.6366 3.20105 19.4678 3.03233C19.2991 2.8636 19.0988 2.72976 18.8784 2.63845C18.6579 2.54714 18.4216 2.50014 18.183 2.50014C17.9444 2.50014 17.7081 2.54714 17.4877 2.63845C17.2672 2.72976 17.0669 2.8636 16.8982 3.03233V3.03233Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.0394 14.2648V17.206C18.0394 17.726 17.8328 18.2248 17.4651 18.5925C17.0973 18.9602 16.5986 19.1668 16.0786 19.1668H5.29415C4.77411 19.1668 4.27537 18.9602 3.90765 18.5925C3.53993 18.2248 3.33334 17.726 3.33334 17.206V6.42157C3.33334 5.90154 3.53993 5.4028 3.90765 5.03508C4.27537 4.66735 4.77411 4.46077 5.29415 4.46077H8.23535" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg> 
  `;

  tdEdit.append(btnEdit);


  tr.append(tdDel, tdName, tdSurname, tdPhone, tdEdit);
  return tr;
};

const addContactPage = (contact, list) => {
  list.append(createRow(contact));
};

export {
  createContainer,
  createHeader,
  createLogo,
  createMain,
  createButtonGroup,
  createTable,
  createForm,
  createFooter,
  createRow,
  addContactPage,
};

