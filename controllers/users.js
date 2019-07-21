/**
 *   Users controller
 */

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { JWT_SECRET } = require('../config')

exports.getAll = (req, res) => {
  User.find({}, (err, users) => {
    if(!err){
      res.json(users)
    } else {
      res.json({
        success: false,
        message: "Error occured"
      })
    }
  })
}

// Register a new user
exports.register = (req, res) => {
  const {
    name,
    username,
    email,
    password
  } = req.body

  let newUser = new User({
    name,
    username,
    email,
    password
  })

  // Hash user password before creating new user
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err

      newUser.password = hash

      newUser.save(err => {
        if(err) {
          let message = ""
          if(err.errors.username) message = "Username already taken"
          if(err.errors.email) message += " Email already exists"

          return res.json({
            success: false,
            message
          })
        } else {
          return res.json({
            success: true,
            message: "User registration is successful."
          })
        }
      })
    })
  })
}

// Login existing user
exports.login =  (req, res) => {
  const { username, password } = req.body

  User.findOne({ username })
    .exec((err, user) => {
      if(err) throw err

      if(!user) {
        return res.json({
          success: false,
          message: "User not found"
        })
      }

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if(err) throw err

        if(isMatch) {
          const token = jwt.sign({
            type: "user",
            data: {
              _id: user._id,
              username: user.username,
              name: user.name,
              email: user.email
            }
          }, JWT_SECRET, {
            expiresIn: 604800 // 1week
          })

          return res.json({
            success: true,
            token: 'JWT ' + token
          })
        } else {
          return res.json({
            success: false,
            message: 'Wrong password'
          })
        }
      })
    })
}
