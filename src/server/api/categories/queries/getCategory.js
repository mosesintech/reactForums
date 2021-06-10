const { GraphQLNonNull, GraphQLID } = require('graphql');
const { CategoryType } = require('../../../types');
const { getCategory } = require('../categoriesModel');

module.exports = {
  type: CategoryType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parents, args) {
    return getCategory(args.id);
  },
};
