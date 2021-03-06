module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'reactForums',
      host: 'localhost',
    },
    migrations: {
      directory: `${__dirname}/data/migrations`,
    },
    seeds: {
      directory: `${__dirname}/data/seeds`,
    },
  },

  test: {
    client: 'pg',
    connection: {
      database: 'rFTest',
      host: 'localhost',
    },
    migrations: {
      directory: `${__dirname}/data/migrations`,
    },
    seeds: {
      directory: `${__dirname}/data/seeds`,
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
