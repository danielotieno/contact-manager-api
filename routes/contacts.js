import express from 'express'

const router = express.Router()

// @route    POST /api/contacts
// @desc     Create a contact
// @access   Private
router.post('/', (req, res) => {
  res.send('Create a contact')
})

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
