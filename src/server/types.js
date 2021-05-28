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

const CategoryType = new GraphQLObjectType({
    name: 'CategoryType',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        createdAt: { type: GraphQLDateTime, resolve: category => category.created_at },
        modifiedAt: { type: GraphQLDateTime, resolve: category => category.modified_at },
        isDeleted: { type: GraphQLBoolean, resolve: category => category.is_deleted },
        isPrivate: { type: GraphQLBoolean, resolve: category => category.is_private },
    })
});

module.exports = {
    UserType,
    CategoryType,
}