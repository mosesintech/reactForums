const knex = require('../../data/dbConfig');
const {
  findAll,
  findOne,
  findByParam,
  findManyByParam,
  addOne,
  updateOne,
  softDeleteOne,
  restoreDeletedOne,
} = require('../../data/dataModel');

describe('Data Access Layer Data Model Functions', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
    await knex.seed.run();
  });

  describe('GET functions', () => {
    test('Should return all tables in given database', async () => {
      const users = await findAll('users');
      const categories = await findAll('categories');
      const forums = await findAll('forums');
      const threads = await findAll('threads');
      const posts = await findAll('posts');
      const notes = await findAll('notes');
      expect(users.length).toEqual(2);
      expect(categories.length).toEqual(2);
      expect(forums.length).toEqual(1);
      expect(threads.length).toEqual(1);
      expect(posts.length).toEqual(1);
      expect(notes.length).toEqual(1);
    });

    describe('findBy', () => {
      test('Should return a single table in given database by ID', async () => {
        const id = 1;
        const user = await findOne('users', id);
        const category = await findOne('categories', id);
        const forum = await findOne('forums', id);
        const thread = await findOne('threads', id);
        const post = await findOne('posts', id);
        const note = await findOne('notes', id);
        expect(user.id).toEqual(1);
        expect(category.id).toEqual(1);
        expect(forum.id).toEqual(1);
        expect(thread.id).toEqual(1);
        expect(post.id).toEqual(1);
        expect(note.id).toEqual(1);
      });
    });

    describe('findByParam tests', () => {
      test('Should return a single user by username', async () => {
        const username = 'Godseer';
        const user = await findByParam('users', { username });
        expect(user.id).toEqual(1);
      });

      test('Should return a single user by email', async () => {
        const email = 'mosesintech@gmail.com';
        const user = await findByParam('users', { email });
        expect(user.id).toEqual(1);
      });

      test('Should return a single category by name', async () => {
        const name = 'Administration';
        const category = await findByParam('categories', { name });
        expect(category.id).toEqual(1);
      });

      test('Should return a single forum by name', async () => {
        const name = 'News & Announcements';
        const forum = await findByParam('forums', { name });
        expect(forum.id).toEqual(1);
      });

      test('Should return a single thread by title', async () => {
        const title = 'Rules';
        const thread = await findByParam('threads', { title });
        expect(thread.id).toEqual(1);
      });

      // posts only identifiable by ID or author
      // notes only identifiable by ID or author
    });

    describe('findManyByParam', () => {
      // users should not be searched by identical info
      // categories should not be searched by identical info

      test('Should return all forums with similar parent category', async () => {
        const category = {
          category_id: 2,
        };
        const { category_id } = category;
        const forums = await findManyByParam('forums', { category_id });
        expect(forums.length).toEqual(1);
      });

      test('Should return all threads with similar parent forum', async () => {
        const forum = {
          forum_id: 1,
        };
        const { forum_id } = forum;
        const threads = await findManyByParam('threads', { forum_id });
        expect(threads.length).toEqual(1);
      });

      test('Should return all threads with similar parent author', async () => {
        const author = {
          author_id: 1,
        };
        const { author_id } = author;
        const threads = await findManyByParam('threads', { author_id });
        expect(threads.length).toEqual(1);
      });

      test('Should return all posts with similar parent thread', async () => {
        const author = {
          author_id: 1,
        };
        const { author_id } = author;
        const posts = await findManyByParam('posts', { author_id });
        expect(posts.length).toEqual(1);
      });

      test('Should return all notes with similar parent author', async () => {
        const author = {
          author_id: 1,
        };
        const { author_id } = author;
        const notes = await findManyByParam('notes', { author_id });
        expect(notes.length).toEqual(1);
      });
    });
  });

  describe('POST functions', () => {
    describe('addOne', () => {
      test('Should add a single user', async () => {
        const user = {
          username: 'Maximino',
          email: 'elegant_totality@yahoo.com',
          password: 'password',
        };
        const result = await addOne('users', user);
        expect(result.id).toEqual(3);
      });

      test('Should add a single category', async () => {
        const category = {
          name: 'The Archives',
          description: '"Deleted" threads go here.',
        };
        const result = await addOne('categories', category);
        expect(result.id).toEqual(3);
      });

      test('Should add a single forum', async () => {
        const forum = {
          name: 'The Archives',
          description: '"Deleted" threads go here.',
          category_id: 3,
        };
        const result = await addOne('forums', forum);
        expect(result.id).toEqual(2);
      });

      test('Should add a single thread', async () => {
        const thread = {
          title: 'Welcome to { reactForums }!',
          text: '[insert welcome text here]',
          forum_id: 1,
          author_id: 3,
        };
        const result = await addOne('threads', thread);
        expect(result.id).toEqual(2);
      });

      test('Should add a single post', async () => {
        const post = {
          text: 'If you wanna get a great start on your forum life, check this thread out. BUMP!',
          thread_id: 2,
          author_id: 3,
        };
        const result = await addOne('posts', post);
        expect(result.id).toEqual(2);
      });

      test('Should add a single note', async () => {
        const note = {
          title: 'Maybe a Blog?',
          text: "I'm thinking of starting a blog here. What do y'all think?",
          author_id: 3,
        };
        const result = await addOne('notes', note);
        expect(result.id).toEqual(2);
      });
    });
  });

  describe('PUT functions', () => {
    describe('updateOne', () => {
      test('Should update a single user', async () => {
        const user = {
          id: 3,
          username: 'Totality',
        };
        const result = await updateOne('users', user.id, user);
        expect(result.username).toEqual(user.username);
        expect(result.created_at).not.toEqual(result.modified_at);
      });

      test('Should update a single category', async () => {
        const category = {
          id: 3,
          name: 'Moderation',
        };
        const result = await updateOne('categories', category.id, category);
        expect(result.name).toEqual(category.name);
        expect(result.created_at).not.toEqual(result.modified_at);
      });

      test('Should update a single forum', async () => {
        const forum = {
          id: 2,
          name: 'Archives',
        };
        const result = await updateOne('forums', forum.id, forum);
        expect(result.name).toEqual(forum.name);
        expect(result.created_at).not.toEqual(result.modified_at);
      });

      test('Should update a single thread', async () => {
        const thread = {
          id: 2,
          is_locked: true,
        };
        const result = await updateOne('threads', thread.id, thread);
        expect(result.name).toEqual(thread.name);
        expect(result.created_at).not.toEqual(result.modified_at);
      });

      test('Should update a single post', async () => {
        const post = {
          id: 2,
          is_locked: true,
        };
        const result = await updateOne('posts', post.id, post);
        expect(result.name).toEqual(post.name);
        expect(result.created_at).not.toEqual(result.modified_at);
      });

      test('Should update a single note', async () => {
        const note = {
          id: 2,
          is_locked: true,
        };
        const result = await updateOne('notes', note.id, note);
        expect(result.name).toEqual(note.name);
        expect(result.created_at).not.toEqual(result.modified_at);
      });
    });
  });

  describe('DELETE functions', () => {
    describe('softDeleteOne', () => {
      test('Should soft delete a single user', async () => {
        const id = 3;
        const result = await softDeleteOne('users', id);
        expect(result.is_deleted).toEqual(true);
      });

      test('Should soft delete a single category', async () => {
        const id = 3;
        const result = await softDeleteOne('categories', id);
        expect(result.is_deleted).toEqual(true);
      });

      test('Should soft delete a single forum', async () => {
        const id = 2;
        const result = await softDeleteOne('forums', id);
        expect(result.is_deleted).toEqual(true);
      });

      test('Should soft delete a single thread', async () => {
        const id = 2;
        const result = await softDeleteOne('threads', id);
        expect(result.is_deleted).toEqual(true);
      });

      test('Should soft delete a single post', async () => {
        const id = 2;
        const result = await softDeleteOne('posts', id);
        expect(result.is_deleted).toEqual(true);
      });

      test('Should soft delete a single note', async () => {
        const id = 2;
        const result = await softDeleteOne('notes', id);
        expect(result.is_deleted).toEqual(true);
      });
    });

    describe('restoreDeletedOne', () => {
      test('Should restore a soft deleted single user', async () => {
        const id = 3;
        const result = await restoreDeletedOne('users', id);
        expect(result.is_deleted).toEqual(false);
      });

      test('Should restore a soft deleted single category', async () => {
        const id = 3;
        const result = await restoreDeletedOne('categories', id);
        expect(result.is_deleted).toEqual(false);
      });

      test('Should restore a soft deleted single forum', async () => {
        const id = 2;
        const result = await restoreDeletedOne('forums', id);
        expect(result.is_deleted).toEqual(false);
      });

      test('Should restore a soft deleted single thread', async () => {
        const id = 2;
        const result = await restoreDeletedOne('threads', id);
        expect(result.is_deleted).toEqual(false);
      });

      test('Should restore a soft deleted single post', async () => {
        const id = 2;
        const result = await restoreDeletedOne('posts', id);
        expect(result.is_deleted).toEqual(false);
      });

      test('Should restore a soft deleted single note', async () => {
        const id = 2;
        const result = await restoreDeletedOne('notes', id);
        expect(result.is_deleted).toEqual(false);
      });
    });
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
