const { GraphQLList } = require('graphql');
const { PostType } = require('../../../types');
const { getPosts } = require('../postsModel');

module.exports = {
  type: new GraphQLList(PostType),
  args: {},
  resolve() {
    return getPosts();
  },
};
