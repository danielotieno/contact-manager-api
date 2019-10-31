import express from 'express'
import jwtAuthentication from '../middleware/auth'
import Contact from '../models/Contact'

const { check, validationResult } = require('express-validator')

const router = express.Router()

// @route    POST /api/contacts
// @desc     Create a contact
// @access   Private
router.post(
  '/',
  [
    jwtAuthentication,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, phone, type } = req.body

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      })

      const contact = await newContact.save()
      res.json(contact)
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Server Error')
    }
  },
)

// @route    GET /api/contacts
// @desc     Get all user contacts
// @access   Private
router.get('/', (req, res) => {
  res.send('Get all user contacts')
})

// @route    PUT /api/contacts:id
// @desc     Update a specific contact
// @access   Private
router.put('/:id', (req, res) => {
  res.send('Update a specific contact')
})

// @route    DEL /api/contacts:id
// @desc     Delete a specific contact
// @access   Private
router.delete('/:id', (req, res) => {
  res.send('Delete a specific contact')
})

module.exports = router
