import express from 'express'
import { connect } from 'hyper-connect'

import {
  del as handleRemoveCharacter,
  get as handleGetCharacter,
  put as handleUpdateCharacter,
} from "./api/characters/[id].js";

import {
  get as handleListCharacters,
  post as handleCreateCharacter,
} from "./api/characters/index.js";

import {
  del as handleRemoveGame,
  get as handleGetGame,
  put as handleUpdateGame,
} from "./api/games/[id].js";

import {
  get as handleListGames,
  post as handleCreateGame,
} from "./api/games/index.js";

const hyper = connect(process.env.HYPER)
const app = express()

app.use(express.json())
app.use((req, _res, next) => {
  req.hyper = hyper;
  next()
})

app.get("/", function (req, res) {
  res.send({ name: "Mario Wiki API" });
});

app.post("/api/characters", handleCreateCharacter);
app.get("/api/characters/:id", handleGetCharacter);
app.put("/api/characters/:id", handleUpdateCharacter);
app.delete("/api/characters/:id", handleRemoveCharacter);
app.get("/api/characters", handleListCharacters);

app.post("/api/games", handleCreateGame);
app.get("/api/games/:id", handleGetGame);
app.put("/api/games/:id", handleUpdateGame);
app.delete("/api/games/:id", handleRemoveGame);
app.get("/api/games", handleListGames);

app.all("*", (_req, res) => res.setStatus(404).send({ msg: "not found" }));


app.listen(3000)
console.log("server has started on http://localhost:3000 🚀"),