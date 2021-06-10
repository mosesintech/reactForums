const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
} = require('graphql');
const { PostType } = require('../../../types');
const { addPost } = require('../postsModel');

module.exports = {
  name: 'addPost',
  type: PostType,
  args: {
    text: { type: new GraphQLNonNull(GraphQLString) },
    isLocked: { type: GraphQLBoolean },
    threadID: { type: new GraphQLNonNull(GraphQLID) },
    authorID: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parents, args) {
    return addPost(args);
  },
};
