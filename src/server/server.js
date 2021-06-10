const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const server = express();

server.use(
  '/',
  graphqlHTTP((req) => ({
    schema,
    graphiql: true,
    context: {
      request: req,
    },
  }))
);

module.exports = server;
