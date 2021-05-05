const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');
const { UserType } = require('../../../types.js');
const { addUser } = require('../userModel.js');

module.exports = {
    name: 'addUser',
    type: UserType,
    args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parents, args) {
        return addUser(args);
    },
};