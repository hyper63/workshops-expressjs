import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send({ name: 'Mario Wiki' })
})

app.listen(3000)