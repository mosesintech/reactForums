const { GraphQLList } = require('graphql');
const { PostType } = require('../../../types.js');
const { getPosts } = require('../postsModel.js');

module.exports = {
    type: new GraphQLList(PostType),
    args: {},
    resolve(parents, args) {
        return getPosts();
    },
};