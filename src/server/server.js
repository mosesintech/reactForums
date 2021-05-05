const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js');
const server = express();

server.use('/', graphqlHTTP({
    schema,
    graphiql: true,
}))

module.exports = server;