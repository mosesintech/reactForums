const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
} = require('graphql');
const { ThreadType } = require('../../../types');
const { addThread } = require('../threadsModel');

module.exports = {
  name: 'addThread',
  type: ThreadType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    text: { type: new GraphQLNonNull(GraphQLString) },
    isLocked: { type: GraphQLBoolean },
    forumID: { type: new GraphQLNonNull(GraphQLID) },
    authorID: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parents, args) {
    return addThread(args);
  },
};
