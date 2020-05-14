exports.up = function (knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('users', (table) => {
      table.uuid('id').unique().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
      table.text('first_name', 128).notNullable();
      table.text('last_name', 128);
      table.text('pacient_name', 128);
      table.text('email', 128).notNullable().unique();
      table.text('password', 128);
      table.text('google_id');
      table.text('facebook_id');
      table.datetime('created_at', { precision: 6 }).notNullable().defaultTo(knex.fn.now());
      table.datetime('updated_at', { precision: 6 }).notNullable().defaultTo(knex.fn.now());
      table.datetime('deleted_at', { precision: 6 });
    });
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists('users');
};
