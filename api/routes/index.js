const router = require('express').Router()
const eventsRouter = require('./events')
const usersRouter = require('./users')
const docsRouter = require('./docs')

router
  .use('/events', eventsRouter)
  .use('/users', usersRouter)
  .use('/docs', docsRouter)

module.exports = router
