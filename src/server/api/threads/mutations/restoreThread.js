const { GraphQLNonNull, GraphQLID } = require('graphql');
const { ThreadType } = require('../../../types.js');
const { restoreThread } = require('../threadsModel.js');

module.exports = {
    name: 'restoreThread',
    type: ThreadType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(parents, args) {
        return restoreThread(args.id);
    }
}