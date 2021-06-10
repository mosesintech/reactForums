const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
} = require('graphql');
const { NoteType } = require('../../../types');
const { addNote } = require('../notesModel');

module.exports = {
  name: 'addNote',
  type: NoteType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    text: { type: new GraphQLNonNull(GraphQLString) },
    isLocked: { type: GraphQLBoolean },
    isPrivate: { type: GraphQLBoolean },
    authorID: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parents, args) {
    return addNote(args);
  },
};
