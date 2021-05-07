const bcrypt = require('bcryptjs');
const { findByParam } = require('../../data/dataModel.js');

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
};

async function comparePassword(givenPassword, hashedPassword) {
    return await bcrypt.compareSync(givenPassword, hashedPassword);
};

async function login(credentials, context) {
    const { request } = context;
    if(request.session && request.session.user) {
        throw new Error('User Session already exists.');
    }
    const { email } = credentials;
    const user = await findByParam('users', { email });
    if(!user) {
        throw new Error('Email not registered.');
    }
    const auth = await comparePassword(credentials.password, user.password);
    if(!auth) {
        throw new Error('Incorrect Password.');
    }
    const { password, ...userInfo } = user;
    request.session.user = userInfo;
    return 'Login Successful';
}

async function logout(context) {
    const { request } = context;
    if(!request.session || !request.session.user) {
        throw new Error('There is no User Session');
    };
    request.session.destroy();
    return 'Logout Successful';
}

module.exports = {
    hash,
    hashUser,
    comparePassword,
    login,
    logout,
};