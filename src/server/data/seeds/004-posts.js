exports.seed = function(knex) {
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert([
        {
          text: 'Rule #2\r\n Don\'t forget to be awesome.',
          thread_id: 1,
          author_id: 1,
        },
      ]);
    });
};
