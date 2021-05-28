const { GraphQLID, GraphQLString } = require('graphql');
const { CategoryType } = require('../../../types.js');
const { getCategory } = require('../categoriesModel.js');

module.exports = {
    type: CategoryType,
    args: {
        id: { type: GraphQLID },
    },
    resolve(parents, args) {
        return getCategory(args.id);
    },
};