exports.up = function (knex) {
  return knex.schema.createTable("symptoms", (table) => {
    table
      .uuid("id")
      .unique()
      .notNullable()
      .defaultTo(knex.raw("uuid_generate_v4()"));
    table
      .datetime("happened_at", { precision: 6 })
      .notNullable()
      .defaultTo(knex.fn.now());
    table.integer("duration_seconds");
    table.text("observation");
    table.uuid("user_id").notNullable().references("id").inTable("users");
    table
      .uuid("symptom_generic_id")
      .references("id")
      .inTable("symptoms_generics");
    table.uuid("symptom_users_id").references("id").inTable("symptoms_users");
    table
      .datetime("created_at", { precision: 6 })
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .datetime("updated_at", { precision: 6 })
      .notNullable()
      .defaultTo(knex.fn.now());
    table.datetime("deleted_at", { precision: 6 });
  });
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists("symptoms");
};
