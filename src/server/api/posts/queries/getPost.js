const { GraphQLNonNull, GraphQLID } = require('graphql');
const { PostType } = require('../../../types');
const { getPost } = require('../postsModel');

module.exports = {
  type: PostType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parents, args) {
    return getPost(args.id);
  },
};
