/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex('posts')
    .del()
    .then(() =>
      knex('posts').insert([
        {
          text: "Rule #2\r\n Don't forget to be awesome.",
          thread_id: 1,
          author_id: 1,
        },
      ])
    );
};
