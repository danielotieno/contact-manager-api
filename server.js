import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ meaage: 'Welcome to contact manager API...' })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})
