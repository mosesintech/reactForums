const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');
const { AuthType } = require('../../../types.js');
const { login } = require('../authModel.js');

module.exports = {
    name: 'login',
    type: AuthType,
    args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parents, args) {
        return login(args);
    },
};