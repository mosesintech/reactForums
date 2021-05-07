const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');
const { AuthType } = require('../../../types.js');
const { logout } = require('../authModel.js');

module.exports = {
    name: 'logout',
    type: AuthType,
    args: {},
    resolve(parents, args, context) {
        return logout(context);
    },
};