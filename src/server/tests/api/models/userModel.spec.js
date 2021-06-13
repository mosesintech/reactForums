const knex = require('../../../data/dbConfig');
const {
  getUsers,
  getUser,
  getUserByUsername,
  getUserByEmail,
  addUser,
  updateUser,
  deleteUser,
  restoreUser,
} = require('../../../api/users/userModel');

describe('User Data Model Functions', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
    await knex.seed.run();
  });

  describe('GET functions', () => {
    test('getUsers', async () => {
      const result = await getUsers();
      expect(result.length).toEqual(2);
    });

    test('getUser', async () => {
      const id = 1;
      const result = await getUser(id);
      expect(result.id).toEqual(id);
    });

    test('getUserByUsername', async () => {
      const username = 'Godseer';
      const result = await getUserByUsername(username);
      expect(result.username).toEqual(username);
    });

    test('getUserByEmail', async () => {
      const email = 'moses@totalityworks.com';
      const result = await getUserByEmail(email);
      expect(result.email).toEqual(email);
    });
  });

  describe('POST function', () => {
    test('addUser is successful', async () => {
      const user = {
        username: 'Totality',
        email: 'elegant_totality@yahoo.com',
        password: 'password',
      };
      const result = await addUser(user);
      expect(result.id).toEqual(3);
    });

    test('addUser fails: Username', async () => {
      const user = {
        username: 'Godseer',
        email: 'elegant_totality@yahoo.com',
        password: 'password',
      };
      await expect(() => addUser(user)).rejects.toThrow(
        'Username is already taken.'
      );
    });

    test('addUser fails: Email', async () => {
      const user = {
        username: 'Elegant Totality',
        email: 'mosesintech@gmail.com',
        password: 'password',
      };
      await expect(() => addUser(user)).rejects.toThrow(
        'Email is already in use.'
      );
    });
  });

  describe('PUT function', () => {
    test('updateUser is successful', async () => {
      const user = {
        id: 3,
        username: 'Elegant Totality',
        email: 'elegant_totality@yahoo.com',
        password: 'password',
      };
      const result = await updateUser(user);
      expect(result.username).toEqual(user.username);
      expect(result.created_at).not.toEqual(result.modified_at);
    });

    test('updateUser fails: ID', async () => {
      const user = {
        id: 30,
        username: 'Elegant Totality',
        email: 'elegant_totality@yahoo.com',
        password: 'password',
      };
      await expect(() => updateUser(user)).rejects.toThrow(
        'This user does not exists.'
      );
    });

    test('updateUser fails: no change', async () => {
      const user = {
        id: 3,
        username: 'Elegant Totality',
        email: 'elegant_totality@yahoo.com',
        password: 'password',
      };
      await expect(() => updateUser(user)).rejects.toThrow(
        'No user changes submitted.'
      );
    });
  });

  describe('DELETE functions', () => {
    describe('deleteUser', () => {
      test('deleteUser is successful', async () => {
        const id = 3;
        const result = await deleteUser(id);
        expect(result.is_deleted).toEqual(true);
        expect(result.created_at).not.toEqual(result.modified_at);
      });

      test('deleteUser fails: ID', async () => {
        const id = 30;
        await expect(() => deleteUser(id)).rejects.toThrow(
          'This user does not exists.'
        );
      });

      test('deleteUser fails: already deleted', async () => {
        const id = 3;
        await expect(() => deleteUser(id)).rejects.toThrow(
          'This user is already deleted.'
        );
      });
    });

    describe('restoreUser', () => {
      test('restoreUser is successful', async () => {
        const id = 3;
        const result = await restoreUser(id);
        expect(result.is_deleted).toEqual(false);
        expect(result.created_at).not.toEqual(result.modified_at);
      });

      test('restoreUser fails: ID', async () => {
        const id = 30;
        await expect(() => restoreUser(id)).rejects.toThrow(
          'This user does not exists.'
        );
      });

      test('restoreUser fails: not deleted', async () => {
        const id = 3;
        await expect(() => restoreUser(id)).rejects.toThrow(
          'This user is not deleted.'
        );
      });
    });
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
