const { types } = require("../utils/types");

exports.seed = function (knex) {
  return knex("syntoms_types")
    .del()
    .then(function () {
      return knex("syntoms_types").insert(types);
    });
};
