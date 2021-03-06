const bcrypt = require('bcryptjs');
// const { findByParam } = require('../../data/dataModel');

async function hash() {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hashSync(salt);
}

async function hashUser(user) {
  const newPass = await bcrypt.hashSync(user.password);
  const newUser = {
    ...user,
    password: newPass,
  };
  return newUser;
}

async function comparePassword(givenPassword, hashedPassword) {
  const pass = await bcrypt.compareSync(givenPassword, hashedPassword);
  return pass;
}

module.exports = {
  hash,
  hashUser,
  comparePassword,
};
