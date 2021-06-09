const { GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLID } = require('graphql');
const { NoteType } = require('../../../types.js');
const { updateNote } = require('../notesModel.js');

module.exports = {
    name: 'updateNote',
    type: NoteType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        text: { type: new GraphQLNonNull(GraphQLString) },
        isLocked: { type: new GraphQLNonNull(GraphQLBoolean) },
        isPrivate: { type: new GraphQLNonNull(GraphQLBoolean) },
        authorID: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(parents, args) {
        return updateNote(args);
    },
};