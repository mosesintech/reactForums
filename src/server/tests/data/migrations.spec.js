const knex = require('../../data/dbConfig');

describe('Database Migrations', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
  });

  test('Users Migrations', async () => {
    const result = await knex('users');
    expect(result.length).toEqual(0);
  });

  test('Categories Migrations', async () => {
    const result = await knex('categories');
    expect(result.length).toEqual(0);
  });

  test('Forums Migrations', async () => {
    const result = await knex('forums');
    expect(result.length).toEqual(0);
  });

  test('Threads Migrations', async () => {
    const result = await knex('threads');
    expect(result.length).toEqual(0);
  });

  test('Posts Migrations', async () => {
    const result = await knex('posts');
    expect(result.length).toEqual(0);
  });

  test('Notes Migrations', async () => {
    const result = await knex('notes');
    expect(result.length).toEqual(0);
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
