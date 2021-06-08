const { GraphQLNonNull, GraphQLID, GraphQLString, GraphQLBoolean } = require('graphql');
const { ThreadType } = require('../../../types.js');
const { updateThread } = require('../threadsModel.js');

module.exports = {
    name: 'updateThread',
    type: ThreadType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        text: { type: new GraphQLNonNull(GraphQLString) },
        isLocked: { type: new GraphQLNonNull(GraphQLBoolean) },
        forumID: { type: new GraphQLNonNull(GraphQLID) },
        authorID: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(parents, args) {
        return updateThread(args);
    },
};