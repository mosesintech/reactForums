const { findOne, findAll, findByParam, addOne } = require('../../data/dataModel.js');
const { hashUser } = require('../auth/authModel.js');

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
    if(usernameExists) {
        throw new Error('Username is already taken.');
    }
    if(emailExists) {
        throw new Error('Email is already in use.');
    }
    const hashedUser = await hashUser(user);
    return addOne('users', hashedUser);
}

module.exports = {
    getUsers,
    getUser,
    getUserByUsername,
    getUserByEmail,
    addUser,
}