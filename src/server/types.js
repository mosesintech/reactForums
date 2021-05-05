const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');
const { GraphQLDateTime } = require('graphql-iso-date');

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        createdAt: { type: GraphQLDateTime, resolve: user => user.created_at },
        modifiedAt: { type: GraphQLDateTime, resolve: user => user.modified_at },
    }),
});

module.exports = {
    UserType,
}