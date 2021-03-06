const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
} = require('graphql');
const { ForumType } = require('../../../types');
const { addForum } = require('../forumsModel');

module.exports = {
  name: 'addForum',
  type: ForumType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    isPrivate: { type: GraphQLBoolean },
    categoryID: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parents, args) {
    return addForum(args);
  },
};
