// nextId.js
let nextId = 3;

export const getNextId = () => {
  return nextId++;
};

export const setNextId = (newId: number) => {
  nextId = newId;
};
