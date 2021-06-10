const { GraphQLNonNull, GraphQLString } = require('graphql');
const { UserType } = require('../../../types');
const { addUser } = require('../userModel');

module.exports = {
  name: 'addUser',
  type: UserType,
  args: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parents, args) {
    return addUser(args);
  },
};
