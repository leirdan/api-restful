import * as file from "../../data.js";
const data = file.data;

export const songController = {
	insertSong(req, res) {
		const { id, title, composer, duration, genre } = req.body;
		const newSong = {
			id: id,
			title: title,
			composer: composer,
			duration: duration,
			genre: genre
		};
		if (!newSong.title || !newSong.id) {
			return res.status(403).json({ message: `insert the complete object!` });
		}
		data.push(newSong);
		return res.status(201).json({ message: "new song was just added to our database!" });
	}
};
