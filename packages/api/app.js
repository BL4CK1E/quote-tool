const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const logger = require('morgan')
const connection = require('./db/db')

const indexRouter = require('./routes/index')
const proposalRouter = require('./routes/proposal')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/api/v1/proposal', proposalRouter)

connection()

module.exports = app