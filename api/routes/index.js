const router = require('express').Router()
const eventsRouter = require('./events')
const usersRouter = require('./users')

router.use('/events', eventsRouter)
router.use('/users', usersRouter)

module.exports = router
