/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('posts', (tbl) => {
    tbl.increments();
    tbl.text('text').notNullable();
    tbl.boolean('is_locked').defaultTo(false);
    tbl.boolean('is_deleted').defaultTo(false);
    tbl.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    tbl.timestamp('modified_at').notNullable().defaultTo(knex.fn.now());
    tbl
      .integer('thread_id')
      .references('id')
      .inTable('threads')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .unsigned()
      .notNullable();
    tbl
      .integer('author_id')
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .unsigned()
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('posts');
};
