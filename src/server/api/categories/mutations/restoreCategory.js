const { GraphQLNonNull, GraphQLID } = require('graphql');
const { CategoryType } = require('../../../types.js');
const { restoreCategory } = require('../categoriesModel.js');

module.exports = {
    name: 'restoreCategory',
    type: CategoryType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(parents, args) {
        return restoreCategory(args.id);
    }
}