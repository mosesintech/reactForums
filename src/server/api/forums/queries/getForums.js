const { GraphQLList } = require('graphql');
const { ForumType } = require('../../../types.js');
const { getForums } = require('../forumsModel.js');

module.exports = {
    type: new GraphQLList(ForumType),
    args: {},
    resolve(parents, args) {
        return getForums();
    },
};