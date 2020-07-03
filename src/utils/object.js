const _ = require("lodash");

export const getObject = (updates, body) => {
  let updatesToDb = {};
  updates.forEach((update) => {
    if (body[update] !== null) {
      updatesToDb = { ...updatesToDb, [_.snakeCase(update)]: body[update] };
    }

    return;
  });

  return updatesToDb;
};

export const transformToSnakeCase = (obj) => {
  const newObj = {};

  for (let key in obj) {
    newObj[_.snakeCase(key)] = obj[key];
  }

  return newObj;
};
