const { GraphQLObjectType } = require('graphql');
const { getUser, getUsers } = require('./api/users/queries');
const { getCategory } = require('./api/categories/queries');

module.exports = new GraphQLObjectType({
    name: 'rootQuery',
    fields: {
        getUser,
        getUsers,
        getCategory,
    }
});