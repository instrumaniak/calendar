// Server

const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')

const apiRouter = require('./routes')

//Configure Mongoose
const MDBURL = process.env.MDBURL || 'mongodb://localhost/calendar'

mongoose.Promise = global.Promise
mongoose.connect(MDBURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection error: '))
db.once('open', () => {
  console.log('Connected to Mongodb')
})

//Configure express
const app = express()
app.set('port', process.env.PORT || 5000)
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())

// Register API endpoints
app.use('/api', apiRouter)

//Serve Static contents
app.use(express.static(path.resolve(__dirname, '../client/build')))

// catch anything else
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build/index.html'))
})

app.listen(app.get('port'), () => {
  console.log('Listening on port: ' + app.get('port'))
})
