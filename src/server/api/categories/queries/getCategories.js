const { GraphQLList } = require('graphql');
const { CategoryType } = require('../../../types.js');
const { getCategories } = require('../categoriesModel.js');

module.exports = {
    type: new GraphQLList(CategoryType),
    args: {},
    resolve(parents, args) {
        return getCategories();
    },
};