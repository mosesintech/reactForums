exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('username').notNullable().unique();
      tbl.string('email').notNullable().unique();
      tbl.string('password').notNullable();
      tbl.boolean('is_deleted').defaultTo(false);
      tbl.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      tbl.timestamp('modified_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
