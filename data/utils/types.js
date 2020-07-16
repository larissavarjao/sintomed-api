const { uuid } = require("uuidv4");

const genericType = { id: uuid(), name: "Geral" };
const neurologicalType = { id: uuid(), name: "Neurologico" };
const ophthalmologicalType = { id: uuid(), name: "Ocular" };
const gastrointestinalType = { id: uuid(), name: "Gastrointestinal" };
const cardiovascularType = { id: uuid(), name: "Cardiovascular" };
const urologicalType = { id: uuid(), name: "Urologico" };
const pulmonaryType = { id: uuid(), name: "Pulmonar" };
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
