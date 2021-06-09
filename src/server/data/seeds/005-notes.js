exports.seed = function(knex) {
  return knex('notes').del()
    .then(function () {
      return knex('notes').insert([
        {
          title: 'My Blog: Intro',
          text: 'Get ready for the bestest, most pimpin blog you done ever read by the most awesome web admint he world done ever known\'d.',
          author_id: 1,
        },
      ]);
    });
};
