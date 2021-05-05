const { GraphQLObjectType } = require('graphql');
const { addUser } = require('./api/users/mutations');

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser,
    }
});