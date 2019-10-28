import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'
import jwtAuthentication from '../middleware/auth'

import User from '../models/User'

const { check, validationResult } = require('express-validator')

const router = express.Router()

// @route    POST /api/auth
// @desc     Auth and get a token
// @access   Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body

    try {
      const user = await User.findOne({ email })

      if (!user) {
        res.status(400).json({ msg: 'Invalid credentials' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        res.status(400).json({ msg: 'Invalid credentials' })
      }

      const payload = {
        user: {
          id: user.id,
        },
      }

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 3600000,
        },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        },
      )
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Server Error')
    }
  },
)

// @route    GET /api/auth
// @desc     Get Logged in User
// @access   Private
router.get('/', jwtAuthentication, (req, res) => {
  res.send('Get LoggedIn User')
})

module.exports = router
