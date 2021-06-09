const { GraphQLNonNull, GraphQLID } = require('graphql');
const { PostType } = require('../../../types.js');
const { getPost } = require('../postsModel.js');

module.exports = {
    type: PostType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(parents, args) {
        return getPost(args.id);
    },
};