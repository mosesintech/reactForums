exports.seed = function(knex) {
  return knex('forums').del()
    .then(function () {
      return knex('forums').insert([
        {
          name: 'News & Announcements',
          description: 'The latest updates',
          category_id: 2,
        },
      ]);
    });
};
