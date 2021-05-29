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
        if(args.email) {
            return getUserByEmail(args.email);
        }
        if(args.id) {
            return getUser(args.id);
        }
        if(args.username) {
            return getUserByUsername(args.username);
        }
        throw new Error('Please provide a User ID, Username, or Email.');
    },
};