const { GraphQLNonNull, GraphQLID } = require('graphql');
const { CategoryType } = require('../../../types.js');
const { deleteCategory } = require('../categoriesModel.js');

module.exports = {
    name: 'deleteCategory',
    type: CategoryType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(parents, args) {
        return deleteCategory(args.id);
    }
}