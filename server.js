import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ meaage: 'Welcome to contact manager API...' })
})

// Define routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})
