const {
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');
const { ForumType } = require('../../../types');
const { updateForum } = require('../forumsModel');

module.exports = {
  name: 'updateForum',
  type: ForumType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    isPrivate: { type: new GraphQLNonNull(GraphQLBoolean) },
    categoryID: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parents, args) {
    return updateForum(args);
  },
};
