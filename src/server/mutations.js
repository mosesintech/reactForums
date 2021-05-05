const { GraphQLObjectType } = require('graphql');
const { addUser, updateUser } = require('./api/users/mutations');

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser,
        updateUser
    }
});