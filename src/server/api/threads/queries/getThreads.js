const { GraphQLList } = require('graphql');
const { ThreadType } = require('../../../types');
const { getThreads } = require('../threadsModel');

module.exports = {
  type: new GraphQLList(ThreadType),
  args: {},
  resolve() {
    return getThreads();
  },
};
