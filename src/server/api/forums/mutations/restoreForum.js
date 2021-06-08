const { GraphQLNonNull, GraphQLID } = require('graphql');
const { ForumType } = require('../../../types.js');
const { restoreForum } = require('../forumsModel.js');

module.exports = {
    name: 'restoreForum',
    type: ForumType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(parents, args) {
        return restoreForum(args.id);
    }
}