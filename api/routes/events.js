const express = require('express')
const router = express.Router()
const eventsController = require('../controllers/events')

router
  .get('/', eventsController.getAll)
  .post('/', eventsController.create)
  .get('/:id', eventsController.getByID)
  .put('/:id', eventsController.update)
  .delete('/:id', eventsController.delete)

module.exports = router
