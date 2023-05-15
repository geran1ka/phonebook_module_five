export const addClassElem = (elem, selectorClass) => elem.classList.add(selectorClass);

export const changeClassElem = (elemClass, selectorClass, method) => {
  const elems = document.querySelectorAll(elemClass);
  switch (method) {
    case 'add':
      elems.forEach(elem => elem?.classList.add(selectorClass));
      break;
    case 'remove':
      elems.forEach(elem => elem?.classList.remove(selectorClass));
      break;
    case 'toggle':
      elems.forEach(elem => elem?.classList.toggle(selectorClass));
      break;
    default:
      console.log('Что-то пошло не так');
  }
};
