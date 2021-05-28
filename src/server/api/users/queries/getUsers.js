const { GraphQLList } = require('graphql');
const { UserType } = require('../../../types.js');
const { getUsers } = require('../userModel.js');

module.exports = {
    type: new GraphQLList(UserType),
    args: {},
    resolve(parents, args) {
        return getUsers();
    },
};