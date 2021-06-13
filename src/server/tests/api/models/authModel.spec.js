const {
  hash,
  hashUser,
  comparePassword,
} = require('../../../api/auth/authModel');

describe('Authentication & Authorization Data Model Functions', () => {
  describe('Hashing Functions', () => {
    test('hash', async () => {
      const result = await hash();
      expect(result).toContain('$2a$10$');
    });

    test('hashUser', async () => {
      const user = {
        username: 'Totality',
        password: 'password',
      };
      const result = await hashUser(user);
      expect(result.password).toContain('$2a$10$');
      expect(result.password).not.toEqual(user.password);
    });

    test('comparePassword', async () => {
      const user = {
        username: 'Totality',
        password: 'password',
      };
      const hashed = await hashUser(user);
      const result = await comparePassword(user.password, hashed.password);
      expect(hashed.password).toContain('$2a$10$');
      expect(hashed.password).not.toEqual(user.password);
      expect(result).toEqual(true);
    });
  });
});
