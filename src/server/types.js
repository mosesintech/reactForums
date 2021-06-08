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

const ForumType = new GraphQLObjectType({
    name: 'ForumType',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        createdAt: { type: GraphQLDateTime, resolve: forum => forum.created_at },
        modifiedAt: { type: GraphQLDateTime, resolve: forum => forum.modified_at },
        isDeleted: { type: GraphQLBoolean, resolve: forum => forum.is_deleted },
        isPrivate: { type: GraphQLBoolean, resolve: forum => forum.is_private },
        categoryID: { type: GraphQLID, resolve: forum => forum.category_id },
    })
});

const ThreadType = new GraphQLObjectType({
    name: 'ThreadType',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        text: { type: GraphQLString },
        createdAt: { type: GraphQLDateTime, resolve: thread => thread.created_at },
        modifiedAt: { type: GraphQLDateTime, resolve: thread => thread.modified_at },
        isLocked: { type: GraphQLBoolean, resolve: thread => thread.is_locked },
        isDeleted: { type: GraphQLBoolean, resolve: thread => thread.is_deleted },
        forumID: { type: GraphQLID, resolve: thread => thread.forum_id },
        authorID: { type: GraphQLID, resolve: thread => thread.author_id },
    })
});

module.exports = {
    UserType,
    CategoryType,
    ForumType,
    ThreadType,
}