const { GraphQLNonNull, GraphQLID, GraphQLString, GraphQLBoolean } = require('graphql');
const { CategoryType } = require('../../../types.js');
const { updateCategory } = require('../categoriesModel.js');

module.exports = {
    type: CategoryType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID)},
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        isPrivate: { type: new GraphQLNonNull(GraphQLBoolean) },
    },
    resolve(parents, args) {
        return updateCategory(args);
    },
};