// Server
// Raziur Rahman, 2017

const express = require("express")
const bodyPaser = require("body-parser")
const compression = require("compression")
const morgan = require("morgan")
const mongoose = require("mongoose")

const eventsEndPoint = require("./routes")

//Configure Mongoose
const MDBURL = process.env.MDBURL || 'mongodb://localhost/test'

mongoose.Promise = global.Promise
mongoose.connect(MDBURL,{
	useMongoClient: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection error: '))
db.once('open', ()=>{
	console.log('Connected to Mongodb')
})

//Configure express
const app = express()
app.set('port', (process.env.PORT || 3000))
app.use(morgan('tiny'))
app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({extended: true}))
app.use(compression())

//Serve Static contents
app.use(express.static('ui'))
app.use(express.static('dest'))
app.use('/fonts', express.static('bower_components/bootstrap-css/fonts'))

//API endpoints
app.use('/events', eventsEndPoint)

app.listen(app.get('port'), ()=> {
	console.log("Listening on port: " + app.get('port'))
})