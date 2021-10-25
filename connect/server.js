import express from 'express'
import cors from 'cors'

import getCharacter from './api/get-character.js'
import createCharacter from './api/create-character.js'
import updateCharacter from './api/update-character.js'
import removeCharacter from './api/remove-character.js'
import listCharacters from './api/list-characters.js'


const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/characters/:id', getCharacter);
app.post('/api/characters', createCharacter);
app.put('/api/characters/:id', updateCharacter);
app.delete('/api/characters/:id', removeCharacter);
app.get('/api/characters', listCharacters);

app.get('/', function (req, res) {
  res.send({ name: 'Mario Wiki API' })
})

app.listen(3000)