const { GraphQLNonNull, GraphQLID } = require('graphql');
const { UserType } = require('../../../types');
const { deleteUser } = require('../userModel');

module.exports = {
  name: 'deleteUser',
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parents, args) {
    return deleteUser(args.id);
  },
};
