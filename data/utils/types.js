const { uuid } = require("uuidv4");

const genericType = { id: uuid(), name: "Gerais" };
const neurologicalType = { id: uuid(), name: "Neurológicos/Psicológicos" };
const ophthalmologicalType = { id: uuid(), name: "Ocular" };
const gastrointestinalType = { id: uuid(), name: "Gastrointestinal" };
const cardiovascularType = { id: uuid(), name: "Cardiovascular" };
const urologicalType = { id: uuid(), name: "Urológicos" };
const pulmonaryType = { id: uuid(), name: "Pulmonares" };
const integumentaryType = { id: uuid(), name: "Tegumentar" };

const types = [
  genericType,
  neurologicalType,
  ophthalmologicalType,
  gastrointestinalType,
  cardiovascularType,
  urologicalType,
  pulmonaryType,
  integumentaryType,
];

module.exports = {
  types,
  genericType,
  neurologicalType,
  ophthalmologicalType,
  gastrointestinalType,
  cardiovascularType,
  urologicalType,
  pulmonaryType,
  integumentaryType,
};
