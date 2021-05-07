const bcrypt = require('bcryptjs');
const { findByParam } = require('../../data/dataModel.js');

async function hashUser(user) {
    const newPass = await bcrypt.hashSync(user.password);
    const newUser = {
        ...user,
        password: newPass,
    };
    return newUser;
};

async function comparePassword(givenPassword, hashedPassword) {
    return await bcrypt.compareSync(givenPassword, hashedPassword);
};

async function login(credentials) {
    const { email, password } = credentials;
    const user = await findByParam('users', { email });
    if(!user) {
        throw new Error('Email not registered.');
    }
    const auth = await comparePassword(password, user.password);
    if(!auth) {
        throw new Error('Incorrect Password.');
    }
    // add token to database
    // return token
    return 'Login Successful';
}

module.exports = {
    hashUser,
    comparePassword,
    login,
};