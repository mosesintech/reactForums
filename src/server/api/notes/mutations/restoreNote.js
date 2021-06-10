const { GraphQLNonNull, GraphQLID } = require('graphql');
const { NoteType } = require('../../../types');
const { restoreNote } = require('../notesModel');

module.exports = {
  name: 'restoreNote',
  type: NoteType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parents, args) {
    return restoreNote(args.id);
  },
};
