const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js');
const server = express();

server.use(
    '/', 
    graphqlHTTP((req, res, params) => ({
        schema,
        graphiql: true,
        context: {
            request: req,
        }
    })
));

module.exports = server;