const { GraphQLNonNull, GraphQLID } = require('graphql');
const { NoteType } = require('../../../types.js');
const { getNote } = require('../notesModel.js');

module.exports = {
    type: NoteType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(parents, args) {
        return getNote(args.id);
    },
};