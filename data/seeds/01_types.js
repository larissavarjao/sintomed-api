const { types } = require("../utils/types");

exports.seed = function (knex) {
  return knex("symptoms_types")
    .del()
    .then(function () {
      return knex("symptoms_types").insert(types);
    });
};
