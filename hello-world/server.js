import express from 'express'
import fetch, { Request } from 'node-fetch'
import getCharacter from './api/get-character.js'
import createCharacter from './api/create-character.js'

// expose fetch as global, like browser and Deno
globalThis.fetch = fetch
globalThis.Request = Request

const app = express()

app.get('/api/characters/:id', getCharacter);
app.post('/api/characters', createCharacter);
app.get('/', function (req, res) {
  res.send({ name: 'Mario Wiki API' })
})

app.listen(3000)