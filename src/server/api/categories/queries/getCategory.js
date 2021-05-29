const { GraphQLNonNull, GraphQLID } = require('graphql');
const { CategoryType } = require('../../../types.js');
const { getCategory } = require('../categoriesModel.js');

module.exports = {
    type: CategoryType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(parents, args) {
        return getCategory(args.id);
    },
};