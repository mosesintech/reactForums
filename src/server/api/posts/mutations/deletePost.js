const { GraphQLNonNull, GraphQLID } = require('graphql');
const { PostType } = require('../../../types');
const { deletePost } = require('../postsModel');

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
