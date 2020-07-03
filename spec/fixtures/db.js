const knex = require("knex");
const knexfile = require("../../knexfile");
const { generateUser } = require("../generators/user");
const { createUser, loginUser } = require("../requests/user");

const configOptions = knexfile["test"];

const db = knex(configOptions);

export const deleteAllUsers = async () => {
  db("users").del();
};

export const deleteAllSymptoms = async () => {
  db("symptoms").del();
};

export const setupDB = async () => {
  await deleteAllUsers();
  await deleteAllSymptoms();
  const userGenerated = generateUser();
  await createUser(userGenerated);
  const userBody = (
    await loginUser(userGenerated.email, userGenerated.password)
  ).body;
  return userBody;
};
