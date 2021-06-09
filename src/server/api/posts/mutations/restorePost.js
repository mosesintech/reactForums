const { GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLID } = require('graphql');
const { PostType } = require('../../../types.js');
const { restorePost } = require('../postsModel.js');

module.exports = {
    name: 'restorePost',
    type: PostType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(parents, args) {
        return restorePost(args.id);
    },
};