/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex('forums')
    .del()
    .then(() =>
      knex('forums').insert([
        {
          name: 'News & Announcements',
          description: 'The latest updates',
          category_id: 2,
        },
      ])
    );
};
