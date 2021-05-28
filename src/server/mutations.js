const { GraphQLObjectType } = require('graphql');
const { addUser, updateUser, deleteUser, restoreUser } = require('./api/users/mutations');

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser,
        updateUser,
        deleteUser,
        restoreUser,
    }
});