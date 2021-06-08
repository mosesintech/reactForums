const { GraphQLNonNull, GraphQLID } = require('graphql');
const { ThreadType } = require('../../../types.js');
const { deleteThread } = require('../threadsModel.js');

module.exports = {
    name: 'deleteThread',
    type: ThreadType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(parents, args) {
        return deleteThread(args.id);
    }
}