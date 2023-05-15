const cloneObj = (obj) => {
  const newObj = {};
  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
};

export default cloneObj;


