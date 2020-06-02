const router = require('express').Router()
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')

router.use(
  '/',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    customSiteTitle: 'Calendar API docs',
    customCss: '.topbar { display: none; }',
  })
)

module.exports = router
