const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users')
const { requiresAuth } = require('../middlewares/auth')

router.get('/', requiresAuth, usersController.getAll)
router.post('/register', usersController.register)
router.post('/login', usersController.login)

module.exports = router
