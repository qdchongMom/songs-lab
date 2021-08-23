const express = require("express");

const app = express();
app.use(express.json());

const songs = [
  {
    name: "someSongName",
    artist: "someSongArtist",
  },
  {
    name: "anotherSongName",
    artist: "anotherArtist",
  },
];

app.get("/songs", (req, res) => {
  res.json(songs);
});

app.post("/songs", (req, res) => {
  let newSong = {
    id: songs.length + 1,
    name: req.body.name,
    artist: req.body.artist,
  };
  songs.push(newSong);
  res.status(201).send(newSong);
  //res.sendStatus(201);
});

module.exports = app;
