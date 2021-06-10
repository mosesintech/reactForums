const { GraphQLNonNull, GraphQLID } = require('graphql');
const { ThreadType } = require('../../../types');
const { restoreThread } = require('../threadsModel');

module.exports = {
  name: 'restoreThread',
  type: ThreadType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parents, args) {
    return restoreThread(args.id);
  },
};
