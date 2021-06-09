const { GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLID } = require('graphql');
const { PostType } = require('../../../types.js');
const { deletePost } = require('../postsModel.js');

module.exports = {
    name: 'deletePost',
    type: PostType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(parents, args) {
        return deletePost(args.id);
    },
};