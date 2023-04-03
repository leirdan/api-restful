import { data } from "../data";
import { Request, Response } from "express";

export class SongController {
	public index(req: Request, res: Response): Response {
		try {
			return res.status(200).json(data);
		} catch (err) {
			return res.status(500).json({ message: err });
		}
	}

	public getOneSong(req: Request, res: Response): Response {
		const id = req.params.id;
		const song = data.find((song: any) => song.id === id);
		if (!song) {
			return res.status(404).json({ message: `this song doesn't exist!` });
		}
		return res.status(200).json(song);
	}

	public insertSong(req: Request, res: Response): Response {
		const { id, title, composer, duration, genre } = req.body;
		const newSong = {
			id: id,
			title: title,
			composer: composer,
			duration: duration,
			genre: genre
		};
		if (newSong.title.length === 0 || newSong.title == undefined) {
			return res.status(403).json({ message: `insert the song's name!` });
		}
		if (newSong.id.includes(`@!#$%&*()\"|`)) {
			return res.status(403).json({ message: `invalid ID!` });
		}
		try {
			data.push(newSong);
			return res.status(201).json({ message: "new song was just added to our database!" });
		} catch (err) {
			return res.status(500).json({ message: err });
		}
	}

	public updateSong(req: Request, res: Response): Response {
		const { id } = req.params;
		const song: any = data.find((song: any) => song.id == id);
		if (!song) {
			return res.status(404).json({ message: `this song doesn't exist` });
		} else {
			const { title, composer } = req.body;
			song.title = title;
			song.composer = composer;
			return res.status(201).json({ message: "song updated!" });
		}
	}

	public deleteSong(req: Request, res: Response): Response {
		const { id } = req.params;
		try {
			const song: any = data.find((song: any) => song.id === id);
			const index = data.indexOf(song);
			data.splice(index, 1);
			return res.status(200).json({ message: `song was just deleted!` });
		} catch (err) {
			return res.status(500).json({ message: err });
		}
	}
}
