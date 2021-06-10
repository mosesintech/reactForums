const { GraphQLList } = require('graphql');
const { NoteType } = require('../../../types');
const { getNotes } = require('../notesModel');

module.exports = {
  type: new GraphQLList(NoteType),
  args: {},
  resolve() {
    return getNotes();
  },
};
