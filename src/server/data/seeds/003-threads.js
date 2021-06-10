/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex('threads')
    .del()
    .then(() =>
      knex('threads').insert([
        {
          title: 'Rules',
          text: "Rule #1\r\n Don't be a loser.",
          forum_id: 1,
          author_id: 1,
        },
      ])
    );
};
