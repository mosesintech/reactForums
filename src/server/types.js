const { GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList } = require('graphql');
const { GraphQLDateTime } = require('graphql-iso-date');
const { getUser } = require('./api/users/userModel.js');
const { getPostsByUser } = require('./api/posts/postsModel.js');
const { getNotesByUser } = require('./api/notes/notesModel.js');
const { getCategory } = require('./api/categories/categoriesModel.js');
const { getForum, getForumByCategory } = require('./api/forums/forumsModel.js');
const { getThread, getThreadsByUser, getThreadsByForum } = require('./api/threads/threadsModel.js');

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        createdAt: { type: GraphQLDateTime, resolve: user => user.created_at },
        modifiedAt: { type: GraphQLDateTime, resolve: user => user.modified_at },
        isDeleted: { type: GraphQLBoolean, resolve: user => user.is_deleted },
        threads: { 
            type: new GraphQLList(ThreadType),
            resolve(parent, args, ctx) {
                return getThreadsByUser(parent.id);
            }
        },
        posts: { 
            type: new GraphQLList(PostType),
            resolve(parent, args, ctx) {
                return getPostsByUser(parent.id);
            }
        },
        notes: { 
            type: new GraphQLList(NoteType),
            resolve(parent, args, ctx) {
                return getNotesByUser(parent.id);
            }
        }
    }),
});

const NoteType = new GraphQLObjectType({
    name: 'NoteType',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        text: { type: GraphQLString },
        createdAt: { type: GraphQLDateTime, resolve: note => note.created_at },
        modifiedAt: { type: GraphQLDateTime, resolve: note => note.modified_at },
        isLocked: { type: GraphQLBoolean, resolve: note => note.is_locked },
        isPrivate: { type: GraphQLBoolean, resolve: note => note.is_private },
        isDeleted: { type: GraphQLBoolean, resolve: note => note.is_deleted },
        author: { 
            type: UserType,
            resolve(parent, arg, ctx) {
                return getUser(parent.author_id);
            }
        },
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
        forums: {
            type: new GraphQLList(ForumType),
            resolve(parent, args, ctx) {
                return getForumByCategory(parent.id)
            }
        }
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
        category: { 
            type: CategoryType,
            resolve(parent, args, ctx) {
                return getCategory(parent.category_id)
            }
        },
        threads: {
            type: new GraphQLList(ThreadType),
            resolve(parent, args, ctx) {
                return getThreadsByForum(parent.id);
            }
        }
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
        forum: { 
            type: ForumType,
            resolve(parent, arg, ctx) {
                return getForum(parent.forum_id);
            }
        },
        author: { 
            type: UserType,
            resolve(parent, arg, ctx) {
                return getUser(parent.author_id);
            }
        },
    })
});

const PostType = new GraphQLObjectType({
    name: 'PostType',
    fields: () => ({
        id: { type: GraphQLID },
        text: { type: GraphQLString },
        createdAt: { type: GraphQLDateTime, resolve: post => post.created_at },
        modifiedAt: { type: GraphQLDateTime, resolve: post => post.modified_at },
        isLocked: { type: GraphQLBoolean, resolve: post => post.is_locked },
        isDeleted: { type: GraphQLBoolean, resolve: post => post.is_deleted },
        thread: { 
            type: ThreadType, 
            resolve(parent, arg, ctx) {
                return getThread(parent.thread_id);
            } 
        },
        author: { 
            type: UserType,
            resolve(parent, arg, ctx) {
                return getUser(parent.author_id);
            }
        },
    })
});

module.exports = {
    UserType,
    NoteType,
    CategoryType,
    ForumType,
    ThreadType,
    PostType,
}