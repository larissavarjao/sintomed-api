const {
  genericSymptoms,
  cardiovascularSymptoms,
  gastrointestinalSymptoms,
  integumentarySymptoms,
  neurologicalSymptoms,
  ophthalmologicalSymptoms,
  pulmonarySymptoms,
  urologicalSymptoms,
} = require("../utils/symptoms_generics");

exports.seed = function (knex) {
  return knex("symptoms_generics")
    .del()
    .then(function () {
      return knex("symptoms_generics").insert([
        ...genericSymptoms,
        ...cardiovascularSymptoms,
        ...gastrointestinalSymptoms,
        ...integumentarySymptoms,
        ...neurologicalSymptoms,
        ...ophthalmologicalSymptoms,
        ...pulmonarySymptoms,
        ...urologicalSymptoms,
      ]);
    });
};
