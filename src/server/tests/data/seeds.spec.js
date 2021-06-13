const knex = require('../../data/dbConfig');

describe('Database Seeds', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
    await knex.seed.run();
  });

  test('Users Seed', async () => {
    const result = await knex('users');
    expect(result.length).toEqual(2);
  });

  test('Categories Seed', async () => {
    const result = await knex('categories');
    expect(result.length).toEqual(2);
  });

  test('Forums Seed', async () => {
    const result = await knex('forums');
    expect(result.length).toEqual(1);
  });

  test('Threads Seed', async () => {
    const result = await knex('threads');
    expect(result.length).toEqual(1);
  });

  test('Posts Seed', async () => {
    const result = await knex('posts');
    expect(result.length).toEqual(1);
  });

  test('Notes Seed', async () => {
    const result = await knex('notes');
    expect(result.length).toEqual(1);
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
