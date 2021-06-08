const { GraphQLList } = require('graphql');
const { ThreadType } = require('../../../types.js');
const { getThreads } = require('../threadsModel.js');

module.exports = {
    type: new GraphQLList(ThreadType),
    args: {},
    resolve(parents, args) {
        return getThreads();
    },
};