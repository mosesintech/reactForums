exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { username: 'Godseer', email: 'mosesintech@gmail.com', password: 'password' },
      ]);
    });
};
