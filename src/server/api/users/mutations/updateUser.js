const { GraphQLNonNull, GraphQLID, GraphQLString } = require('graphql');
const { UserType } = require('../../../types');
const { updateUser } = require('../userModel');

module.exports = {
  name: 'updateUser',
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parents, args) {
    return updateUser(args);
  },
};
