import jwt from 'jsonwebtoken'
import config from 'config'

const jwtAuthentication = (req, res, next) => {
  // GET Token from Header

  const token = req.header('x-auth-token')

  // Check if not Token
  if (!token) {
    res.status(401).send({ msg: 'No token, authorization denied' })
  }

  // Verify Token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'))
    req.user = decoded.user
    next()
  } catch (err) {
    res.status(401).json({ msg: 'Token is not Valid' })
  }
}

export default jwtAuthentication
