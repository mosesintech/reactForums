const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean } = require('graphql');
const { GraphQLDateTime } = require('graphql-iso-date');

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        createdAt: { type: GraphQLDateTime, resolve: user => user.created_at },
        modifiedAt: { type: GraphQLDateTime, resolve: user => user.modified_at },
        isDeleted: { type: GraphQLBoolean, resolve: user => user.is_deleted },
    }),
});

const AuthType = new GraphQLObjectType({
    name: 'AuthType',
    fields: () => ({
        token: { type: GraphQLString, resolve: token => token },
    }),
});

module.exports = {
    UserType,
    AuthType,
}