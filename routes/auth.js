import express from 'express'

const router = express.Router()

// @route    POST /api/auth
// @desc     Auth and get a token
// @access   Public
router.post('/', (req, res) => {
  res.send('Log In User')
})

// @route    GET /api/auth
// @desc     Get Logged in User
// @access   Private
router.get('/', (req, res) => {
  res.send('Get LoggedIn User')
})

module.exports = router
