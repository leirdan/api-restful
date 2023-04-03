import { data } from "../data";
import { Request, Response } from "express";
import { Album } from "../interface/Album";

export class AlbumController {
	public index(req: Request, res: Response): Response {
		try {
			return res.status(200).json(data);
		} catch (err) {
			return res.status(500).json({ message: err });
		}
	}

	public getOneAlbum(req: Request, res: Response): Response {
		const id = req.params.id;
		const album = data.find((album: any) => album.id === id) as Album;
		if (!album) {
			return res.status(404).json({ message: `this album doesn't exist!` });
		}
		return res.status(200).json(album);
	}

	public insertAlbum(req: Request, res: Response): Response {
		const { id, title, composer, image } = req.body;
		const newAlbum = {
			id: id,
			title: title,
			composer: composer,
			image: image
		} as Album;
		if (newAlbum.title == "") {
			return res.status(403).json({ message: `insert the album's name!` });
		}

		if (newAlbum.id == undefined || typeof newAlbum.id !== "number") {
			return res.status(403).json({ message: `invalid ID!` });
		}
		data.push(newAlbum);
		return res.status(201).json({ message: "new album was just added to our database!" });
	}

	public updateAlbum(req: Request, res: Response): Response {
		const { id } = req.body;
		const album = data.find((album: any) => album.id == id) as Album;
		if (!album) {
			return res.status(404).json({ message: `this album doesn't exist` });
		} else {
			const { title, composer } = req.body;
			album.title = title;
			album.composer = composer;
			return res.status(201).json({ message: "album updated!" });
		}
	}

	public deleteAlbum(req: Request, res: Response): Response {
		const { id } = req.params;
		try {
			const song: any = data.find((song: any) => song.id === id);
			const index = data.indexOf(song);
			data.splice(index, 1);
			return res.status(200).json({ message: `album was just deleted!` });
		} catch (err) {
			return res.status(500).json({ message: err });
		}
	}
}
