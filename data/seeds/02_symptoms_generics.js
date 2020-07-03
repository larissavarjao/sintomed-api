const { genericSymptoms } = require("../utils/symptoms_generics");

exports.seed = function (knex) {
  return knex("symptoms_generics")
    .del()
    .then(function () {
      return knex("symptoms_generics").insert([...genericSymptoms]);
    });
};
