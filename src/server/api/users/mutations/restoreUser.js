const { GraphQLNonNull, GraphQLID } = require('graphql');
const { UserType } = require('../../../types.js');
const { restoreUser } = require('../userModel.js');

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