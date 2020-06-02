const Event = require('../models/Event')

// Read All events
exports.getAll = (req, res, next) => {
  Event.find((err, events) => {
    if (err) return next(err)
    res.json(events)
  })
}

// Create an event
exports.create = (req, res, next) => {
  Event.create(req.body, (err, data) => {
    if (err) return next(err)
    res.json(data)
  })
}

// Read an event :id
exports.getByID = (req, res, next) => {
  Event.findById(req.params.id, (err, data) => {
    if (err) return next(err)
    res.json(data)
  })
}

// Update an event :id
exports.update = (req, res, next) => {
  Event.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) return next(err)
    res.json(data)
  })
}

// Delete an event with :id
exports.delete = (req, res, next) => {
  Event.findByIdAndRemove(req.params.id, req.body, (err, data) => {
    if (err) return next(err)
    res.json(data)
  })
}
