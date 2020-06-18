exports.up = function (knex) {
  return knex.schema.createTable("syntoms_users", (table) => {
    table.uuid("id").unique().notNullable().defaultTo(knex.raw("uuid_generate_v4()"));
    table.text("name").notNullable();
    table.text("description");
    table.text("classification");
    table.uuid("type_id").notNullable().references("id").inTable("syntoms_types");
    table.uuid("user_id").notNullable().references("id").inTable("users");
    table.datetime("created_at", { precision: 6 }).notNullable().defaultTo(knex.fn.now());
    table.datetime("updated_at", { precision: 6 }).notNullable().defaultTo(knex.fn.now());
    table.datetime("deleted_at", { precision: 6 });
  });
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists("syntoms_users");
};
