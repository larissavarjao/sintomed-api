const { symptoms } = require("../utils/symptoms");

exports.seed = function (knex) {
  return knex("symptoms")
    .del()
    .then(function () {
      return knex("symptoms").insert(symptoms);
    });
};
