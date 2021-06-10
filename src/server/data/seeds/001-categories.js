/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex('categories')
    .del()
    .then(() =>
      knex('categories').insert([
        {
          name: 'Administration',
          description: 'Where forum admin talk happens',
          is_private: true,
        },
        {
          name: 'General Discussion',
          description: 'For non-categorized chit-cat.',
        },
      ])
    );
};
