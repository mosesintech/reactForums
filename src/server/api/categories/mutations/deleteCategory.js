const { GraphQLNonNull, GraphQLID } = require('graphql');
const { CategoryType } = require('../../../types');
const { deleteCategory } = require('../categoriesModel');

module.exports = {
  name: 'deleteCategory',
  type: CategoryType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parents, args) {
    return deleteCategory(args.id);
  },
};
