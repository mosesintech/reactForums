const bcrypt = require('bcryptjs');

async function hashUser(user) {
    const newPass = await bcrypt.hashSync(user.password);
    const newUser = {
        ...user,
        password: newPass,
    };
    return newUser;
}

module.exports = {
    hashUser,
}