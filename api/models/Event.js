// Events data model
// Raziur Rahman, 2017

const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
	title: String,
	start: {type: Date, default: Date.now},
	end: {type: Date, default: Date.now},
	color: String,
	info: String
})

module.exports = mongoose.model('Event', eventSchema)