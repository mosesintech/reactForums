const { GraphQLNonNull, GraphQLID } = require('graphql');
const { ForumType } = require('../../../types');
const { deleteForum } = require('../forumsModel');

module.exports = {
  name: 'deleteForum',
  type: ForumType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parents, args) {
    return deleteForum(args.id);
  },
};
