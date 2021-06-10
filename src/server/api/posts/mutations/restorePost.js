const { GraphQLNonNull, GraphQLID } = require('graphql');
const { PostType } = require('../../../types');
const { restorePost } = require('../postsModel');

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
