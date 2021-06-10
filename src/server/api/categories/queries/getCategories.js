const { GraphQLList } = require('graphql');
const { CategoryType } = require('../../../types');
const { getCategories } = require('../categoriesModel');

module.exports = {
  type: new GraphQLList(CategoryType),
  args: {},
  resolve() {
    return getCategories();
  },
};
