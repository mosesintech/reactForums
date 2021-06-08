const { GraphQLObjectType } = require('graphql');
const { addUser, updateUser, deleteUser, restoreUser } = require('./api/users/mutations');
const { addCategory,
    updateCategory,
    deleteCategory,
    restoreCategory } = require('./api/categories/mutations');
const { addForum,
    updateForum,
    deleteForum,
    restoreForum, } = require('./api/forums/mutations');
const { addThread,
    updateThread,
    deleteThread,
    restoreThread, } = require('./api/threads/mutations');

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser,
        updateUser,
        deleteUser,
        restoreUser,
        addCategory,
        updateCategory,
        deleteCategory,
        restoreCategory,
        addForum,
        updateForum,
        deleteForum,
        restoreForum,
        addThread,
        updateThread,
        deleteThread,
        restoreThread,
    }
});