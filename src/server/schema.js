const { GraphQLSchema } = require('graphql');
const query = require('./rootQuery.js');
const mutations = require('./mutations.js');

module.exports = new GraphQLSchema({
    query,
    mutation: mutations,
});