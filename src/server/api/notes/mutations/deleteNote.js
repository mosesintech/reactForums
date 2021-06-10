const { GraphQLNonNull, GraphQLID } = require('graphql');
const { NoteType } = require('../../../types');
const { deleteNote } = require('../notesModel');

module.exports = {
  name: 'deleteNote',
  type: NoteType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parents, args) {
    return deleteNote(args.id);
  },
};
