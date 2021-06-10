const { GraphQLList } = require('graphql');
const { ForumType } = require('../../../types');
const { getForums } = require('../forumsModel');

module.exports = {
  type: new GraphQLList(ForumType),
  args: {},
  resolve() {
    return getForums();
  },
};
