exports.seed = function(knex) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        {
          name: 'Administration',
          description: 'Where forum admin talk happens',
          is_private: true,
        },
        {
          name: 'General Discussion',
          description: 'For non-categorized chit-cat.',
        },
      ]);
    });
};
