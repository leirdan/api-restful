const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());

app.get("/songs", (req, res) => {
  res.status(200).json(data);
});

app.get("/songs/:id", (req, res) => {
  const { id } = req.params;
  const song = data.find((song) => song.id == id);

  if (!song) {
    return res.status(204).json();
  }

  res.status(200).json(song);
});

app.post("songs", (req, res) => {});

app.put("songs/:id", (req, res) => {
  const { id } = req.params;
  const song = data.find((song) => song.id == id);

  if (!song) {
    return res.status(204).json();
  }
  const { title } = req.body;
  const { composer } = req.body;
  song.title = title;
  song.composer = composer;

  res.json(song);
});

app.delete("/songs/:id", (req, res) => {
  const { id } = req.params;
  const songsFiltered = data.filter((songs) => songs.id != id);

  res.json(songsFiltered);
});

app.listen(8002, () => {
  console.log("Servidor aberto.");
});
