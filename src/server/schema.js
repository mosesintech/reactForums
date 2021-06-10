const { GraphQLSchema } = require('graphql');
const query = require('./rootQuery');
const mutations = require('./mutations');

module.exports = new GraphQLSchema({
  query,
  mutation: mutations,
});
