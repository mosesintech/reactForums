const { GraphQLNonNull, GraphQLID } = require('graphql');
const { NoteType } = require('../../../types');
const { getNote } = require('../notesModel');

module.exports = {
  type: NoteType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parents, args) {
    return getNote(args.id);
  },
};
