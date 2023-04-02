import { Router } from "express";
import * as file from "../data.js";
import { songController } from "./controller/songController.js";
const data = file.data;
const router = Router();

router.get("/songs", (req, res) => {
	res.status(200).json(data);
});

router.get("/songs/:id", (req, res) => {
	const { id } = req.params;
	const song = data.find((song) => song.id == id);
	if (!song) {
		return res.status(204).json({ message: "oops, this song doesnt exist!" });
	}
	res.status(200).json(song);
});

router.post("/songs", songController.insertSong);

router.put("/songs/:id", (req, res) => {
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

router.delete("/songs/:id", (req, res) => {
	const { id } = req.params;
	const songsFiltered = data.filter((songs) => songs.id != id);

	res.json(songsFiltered);
});

export default router;
