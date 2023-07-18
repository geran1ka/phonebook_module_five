export const getCounter = () => {
  let count = 0;
  const counter = () => count++;
  counter.reset = () => count = 0;
  return counter;
};
