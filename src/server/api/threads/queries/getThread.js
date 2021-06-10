const { GraphQLNonNull, GraphQLID } = require('graphql');
const { ThreadType } = require('../../../types');
const { getThread } = require('../threadsModel');

module.exports = {
  type: ThreadType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parents, args) {
    return getThread(args.id);
  },
};
