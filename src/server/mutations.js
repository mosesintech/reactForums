const { GraphQLObjectType } = require('graphql');
const { addUser, updateUser, deleteUser, restoreUser } = require('./api/users/mutations');
const { addCategory,
    updateCategory,
    deleteCategory,
    restoreCategory } = require('./api/categories/mutations');

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
    }
});