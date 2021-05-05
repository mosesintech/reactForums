const { GraphQLID, GraphQLString } = require('graphql');
const { UserType } = require('../../../types.js');
const { getUser, getUserByUsername, getUserByEmail } = require('../userModel.js');

module.exports = {
    type: UserType,
    args: {
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
    },
    resolve(parents, args) {
        if(args.id) {
            return getUser(args.id);
        }
        if(args.username) {
            return getUserByUsername(args.username);
        }
        return getUserByEmail(args.email);
    },
};