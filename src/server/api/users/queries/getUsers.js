const { GraphQLList } = require('graphql');
const { UserType } = require('../../../types');
const { getUsers } = require('../userModel');

module.exports = {
  type: new GraphQLList(UserType),
  args: {},
  resolve() {
    return getUsers();
  },
};
