const knex = require('knex');
const knexfile = require('../../knexfile');

const configOptions = knexfile['test'];

const db = knex(configOptions);

export const deleteAllUsers = async () => {
  db('users').truncate();
};

export const deleteAllTravels = async () => {
  db('travels').truncate();
};

export const deleteAllItineraries = async () => {
  db('itineraries').truncate();
};

export const deleteAllTours = async () => {
  db('tours').truncate();
};

export const setupDB = async () => {
  await deleteAllUsers();
  await deleteAllTravels();
  await deleteAllItineraries();
  await deleteAllTours();
};
