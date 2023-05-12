'use strict';
/*
{
  const getStorage = (key) => (localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : []);

  const setStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  const addContactData = (key, value) => {
    const dataContacts = getStorage(key);
    dataContacts.push(value);
    setStorage(key, dataContacts);
  };

  const removeStorage = (phone, title) => {
    const dataContacts = getStorage(title);
    const newDataContacts = dataContacts.filter(item => item.phone !== phone);
    setStorage(title, newDataContacts);
  };
}
*/