const faker = require("faker");
const { users } = require("./users");
const {
  cardiovascularSymptoms,
  gastrointestinalSymptoms,
  genericSymptoms,
  integumentarySymptoms,
  neurologicalSymptoms,
  ophthalmologicalSymptoms,
  pulmonarySymptoms,
  urologicalSymptoms,
} = require("./symptoms_generics");

const generateSymptomGeneric = (genericSymptom, date) => {
  return {
    happened_at: date,
    duration_seconds: 60 * 15,
    observation: faker.random.words(),
    user_id: users[0].id,
    symptom_generic_id: genericSymptom[0].id,
    symptom_user_id: null,
  };
};

const cardiovascularSymptom1 = generateSymptomGeneric(
  cardiovascularSymptoms,
  new Date()
);
const gastrointestinalSymptom1 = generateSymptomGeneric(
  gastrointestinalSymptoms,
  new Date(2020, 1, 1)
);
const genericSymptom1 = generateSymptomGeneric(
  genericSymptoms,
  new Date(2020, 2, 1)
);
const integumentarySymptom1 = generateSymptomGeneric(
  integumentarySymptoms,
  new Date(2020, 3, 1)
);
const neurologicalSymptom1 = generateSymptomGeneric(
  neurologicalSymptoms,
  new Date(2020, 4, 1)
);
const ophthalmologicalSymptom1 = generateSymptomGeneric(
  ophthalmologicalSymptoms,
  new Date(2020, 0, 1)
);
const pulmonarySymptom1 = generateSymptomGeneric(
  pulmonarySymptoms,
  new Date(2020, 5, 1)
);
const urologicalSymptom1 = generateSymptomGeneric(
  urologicalSymptoms,
  new Date(2020, 6, 1)
);

const cardiovascularSymptom2 = {
  happened_at: new Date(2019, 1, 1),
  duration_seconds: 60 * 15,
  observation: faker.random.words(),
  user_id: users[0].id,
  symptom_generic_id: cardiovascularSymptoms[0].id,
  symptom_user_id: null,
};

const symptoms = [
  cardiovascularSymptom1,
  cardiovascularSymptom2,
  gastrointestinalSymptom1,
  genericSymptom1,
  integumentarySymptom1,
  neurologicalSymptom1,
  ophthalmologicalSymptom1,
  pulmonarySymptom1,
  urologicalSymptom1,
];

module.exports = {
  symptoms,
};
