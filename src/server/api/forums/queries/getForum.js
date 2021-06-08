const { GraphQLNonNull, GraphQLID } = require('graphql');
const { ForumType } = require('../../../types.js');
const { getForum } = require('../forumsModel.js');

module.exports = {
    type: ForumType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(parents, args) {
        return getForum(args.id);
    },
};