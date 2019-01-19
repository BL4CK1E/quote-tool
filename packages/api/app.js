/* eslint-disable no-unused-expressions */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

// Apollo Imports
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./types/index');
const resolvers = require('./resolvers/index');

// Database Connection Import
const connection = require('./db/db');

// Redis Connection Import
const { RedisStore, getAsync } = require('./db/redis');

// Mock Data Function Import
const insertMockData = require('./controller/mock/mockData');

// Express Instance
const app = express();

// Express Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// DB Connection & Mock Data Insertion
connection();
setTimeout(() => {
  insertMockData();
}, 2000);

// Redis Connection
RedisStore;

// Apollo Instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ res, req }) => {
    const user = await getAsync(req.headers.auth || '');
    return { res, req, user };
  },
  debug: false,
});

// Apollo Middleware
server.applyMiddleware({ app, server, path: '/___gql' });

module.exports = app;
