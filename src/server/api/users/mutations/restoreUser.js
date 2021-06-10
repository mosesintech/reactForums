const { GraphQLNonNull, GraphQLID } = require('graphql');
const { UserType } = require('../../../types');
const { restoreUser } = require('../userModel');

module.exports = {
  name: 'restoreUser',
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parents, args) {
    return restoreUser(args.id);
  },
};
