const { genericSyntoms } = require("../utils/syntoms_generics");

exports.seed = function (knex) {
  return knex("syntoms_generics")
    .del()
    .then(function () {
      return knex("syntoms_generics").insert([...genericSyntoms]);
    });
};
