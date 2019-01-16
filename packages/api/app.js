const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const logger = require('morgan')
const connection = require('./db/db')

// Apollo Imports
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./types/index')
const resolvers = require('./resolvers/index')

// Mock Data Function
const insertMockData = require('./controller/mock/mockData')

// Express Instance
const app = express()

// Express Middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// DB Connection & Mock Data Insertion
connection()
setTimeout(()=>{
  insertMockData()
}, 2000)

// Apollo Instance
const server = new ApolloServer({ typeDefs, resolvers })

// Apollo Middleware
server.applyMiddleware({ app, server, path: '/___gql'})

module.exports = app