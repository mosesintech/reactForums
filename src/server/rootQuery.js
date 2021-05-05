const { GraphQLObjectType } = require('graphql');
const { getUser, getUsers } = require('./api/users/queries');

module.exports = new GraphQLObjectType({
    name: 'rootQuery',
    fields: {
        getUser,
        getUsers,
    }
});