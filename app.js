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

module.exports = app;
