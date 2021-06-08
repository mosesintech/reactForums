const { GraphQLObjectType } = require('graphql');
const { getUser, getUsers } = require('./api/users/queries');
const { getCategory, getCategories } = require('./api/categories/queries');
const { getForum, getForums } = require('./api/forums/queries');
const { getThread, getThreads } = require('./api/threads/queries');

module.exports = new GraphQLObjectType({
    name: 'rootQuery',
    fields: {
        getUser,
        getUsers,
        getCategory,
        getCategories,
        getForum,
        getForums,
        getThread,
        getThreads,
    }
});