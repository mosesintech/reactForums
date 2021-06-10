const { GraphQLNonNull, GraphQLID } = require('graphql');
const { ForumType } = require('../../../types');
const { getForum } = require('../forumsModel');

module.exports = {
  type: ForumType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parents, args) {
    return getForum(args.id);
  },
};
