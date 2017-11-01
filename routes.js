// CRUD REST API endpoints
// Raziur Rahman, 2017

const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const Event = require('./model')

//GET | Read All events
router.get('/', (req, res, next)=>{
	Event.find((err, events)=>{
		if (err) return next(err)
		res.json(events)
	})
})

//POST | Create an event
router.post('/', (req, res, next)=>{
	Event.create(req.body, (err, data)=>{
		if(err) return next(err)
		res.json(data)
	})
})

//GET | Read an event :id
router.get('/:id', (req, res, next)=>{
	Event.findById(req.params.id, (err, data)=>{
		if(err) return next(err)
		res.json(data)
	})
})

//PUT | Update an event :id
router.put('/:id', (req, res, next)=>{
	Event.findByIdAndUpdate(req.params.id, req.body, (err, data)=>{
		if(err) return next(err)
		res.json(data)
	})
})

//DELETE | Delete an event with :id
router.delete('/:id', (req, res, next)=>{
	Event.findByIdAndRemove(req.params.id, req.body, (err, data)=>{
		if(err) return next(err)
		res.json(data)
	})
})

module.exports = router