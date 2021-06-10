const { hashUser } = require('../auth/authModel');
const {
  findOne,
  findAll,
  findByParam,
  addOne,
  updateOne,
  softDeleteOne,
  restoreDeletedOne,
} = require('../../data/dataModel');

function getUsers() {
  return findAll('users');
}

function getUser(id) {
  return findOne('users', id);
}

function getUserByUsername(username) {
  return findByParam('users', { username });
}

function getUserByEmail(email) {
  return findByParam('users', { email });
}

async function addUser(user) {
  const usernameExists = await getUserByUsername(user.username);
  const emailExists = await getUserByEmail(user.email);
  if (usernameExists) {
    throw new Error('Username is already taken.');
  }
  if (emailExists) {
    throw new Error('Email is already in use.');
  }
  const hashedUser = await hashUser(user);
  return addOne('users', hashedUser);
}

async function updateUser(user) {
  const idExists = await getUser(user.id);
  if (!idExists) {
    throw new Error('This user does not exists.');
  }
  const identicalUsername = idExists.username === user.username;
  const identicalEmail = idExists.email === user.email;
  const identicalPassword = idExists.password === user.password;
  const noChange = identicalUsername && identicalEmail && identicalPassword;
  if (noChange) {
    throw new Error('No user changes submitted.');
  }
  return updateOne('users', idExists.id, user);
}

async function deleteUser(id) {
  const idExists = await getUser(id);
  if (!idExists) {
    throw new Error('This user does not exists.');
  }
  if (idExists.is_deleted) {
    throw new Error('This user is already deleted.');
  }
  return softDeleteOne('users', id);
}

async function restoreUser(id) {
  const idExists = await getUser(id);
  if (!idExists) {
    throw new Error('This user does not exists.');
  }
  if (!idExists.is_deleted) {
    throw new Error('This user is not deleted.');
  }
  return restoreDeletedOne('users', id);
}

module.exports = {
  getUsers,
  getUser,
  getUserByUsername,
  getUserByEmail,
  addUser,
  updateUser,
  deleteUser,
  restoreUser,
};
