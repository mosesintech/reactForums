const { GraphQLNonNull, GraphQLString, GraphQLBoolean } = require('graphql');
const { CategoryType } = require('../../../types');
const { addCategory } = require('../categoriesModel');

module.exports = {
  name: 'addCategory',
  type: CategoryType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    isPrivate: { type: GraphQLBoolean },
  },
  resolve(parents, args) {
    return addCategory(args);
  },
};
