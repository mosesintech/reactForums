const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const database = require('./data/dbConfig.js');
const schema = require('./schema.js');
const { hash } = require('./api/auth/authModel.js')
const server = express();

server.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secureProxy: true,
        httpOnly: true,
        maxAge: 60000*60*24
    },
    store: new KnexSessionStore({
        knex: database,
        tablename: 'user_sessions',
    })
}))

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