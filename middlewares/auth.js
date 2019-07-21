/**
 *   Authentication middleware
 */

const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')

exports.requiresAuth = (req, res, next) => {
 const authHeader = req.headers.authorization
 let result
 if(authHeader)  {
    const token = authHeader.split(' ')[1] // extract token

    try {
      result = jwt.verify(token, JWT_SECRET)
      req.decoded = result
      next()
    }
    catch(err) {
      return res.json({
        success: false,
        message: 'Invalid token'
      })
    }
 } else {
     return res.json({
       success: false,
       message: 'Auth failed'
     })
 }
}
