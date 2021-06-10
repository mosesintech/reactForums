/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('forums', (tbl) => {
    tbl.increments();
    tbl.string('name').notNullable().unique();
    tbl.string('description').notNullable();
    tbl.boolean('is_private').defaultTo(false);
    tbl.boolean('is_deleted').defaultTo(false);
    tbl.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    tbl.timestamp('modified_at').notNullable().defaultTo(knex.fn.now());
    tbl
      .integer('category_id')
      .references('id')
      .inTable('categories')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .unsigned()
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('forums');
};
