const { GraphQLNonNull, GraphQLID } = require('graphql');
const { UserType } = require('../../../types.js');
const { deleteUser } = require('../userModel.js');

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