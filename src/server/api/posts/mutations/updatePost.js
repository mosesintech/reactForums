const { GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLID } = require('graphql');
const { PostType } = require('../../../types.js');
const { updatePost } = require('../postsModel.js');

module.exports = {
    name: 'updatePost',
    type: PostType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        text: { type: new GraphQLNonNull(GraphQLString) },
        isLocked: { type: new GraphQLNonNull(GraphQLBoolean) },
        threadID: { type: new GraphQLNonNull(GraphQLID) },
        authorID: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(parents, args) {
        return updatePost(args);
    },
};