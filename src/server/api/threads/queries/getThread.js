const { GraphQLNonNull, GraphQLID } = require('graphql');
const { ThreadType } = require('../../../types.js');
const { getThread } = require('../threadsModel.js');

module.exports = {
    type: ThreadType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(parents, args) {
        return getThread(args.id);
    },
};