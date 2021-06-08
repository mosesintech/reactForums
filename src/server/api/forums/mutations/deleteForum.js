const { GraphQLNonNull, GraphQLID } = require('graphql');
const { ForumType } = require('../../../types.js');
const { deleteForum } = require('../forumsModel.js');

module.exports = {
    name: 'deleteForum',
    type: ForumType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(parents, args) {
        return deleteForum(args.id);
    }
}