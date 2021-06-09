const { GraphQLList } = require('graphql');
const { NoteType } = require('../../../types.js');
const { getNotes } = require('../notesModel.js');

module.exports = {
    type: new GraphQLList(NoteType),
    args: {},
    resolve(parents, args) {
        return getNotes();
    },
};