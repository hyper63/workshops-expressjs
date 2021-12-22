import { connect } from 'hyper-connect'

const hyper = connect(process.env.HYPER)

const characters = [
  {
    "_id": "character-1",
    "type": "character",
    "name": "Mario",
  },
  {
    "_id": "character-2",
    "type": "character",
    "name": "Luigi",
  },
  {
    "_id": "character-3",
    "type": "character",
    "name": "Princess Peach",
  },
  {
    "_id": "character-4",
    "type": "character",
    "name": "Bowser",
  },
];

console.log(
  await hyper.data.bulk(characters),
);

const games = [
  {
    "_id": "game-1",
    "type": "game",
    "name": "Donkey Kong",
  },
  {
    "_id": "game-2",
    "type": "game",
    "name": "Super Mario Bros",
  },
  {
    "_id": "game-3",
    "type": "game",
    "name": "Smash Bros",
  },
  {
    "_id": "game-4",
    "type": "game",
    "name": "Super Mario Maker",
  },
];

console.log(
  await hyper.data.bulk(games),
);

const appearances = [
  {
    _id: "appearance-1",
    type: "appearance",
    game: {
      id: "game-1",
      name: "Donkey Kong",
    },
    character: {
      id: "character-1",
      name: "Mario",
    },
  },
  {
    _id: "appearance-2",
    type: "appearance",
    game: {
      id: "game-2",
      name: "Super Mario Bros",
    },
    character: {
      id: "character-1",
      name: "Mario",
    },
  },
  {
    _id: "appearance-3",
    type: "appearance",
    game: {
      id: "game-2",
      name: "Super Mario Bros",
    },
    character: {
      id: "character-2",
      name: "Luigi",
    },
  },
];

console.log(
  await hyper.data.bulk(appearances),
);