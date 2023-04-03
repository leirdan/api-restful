import { Router } from "express";
import { SongController } from "./controller/SongController";

const router = Router();
const songCtrl = new SongController();

router.get("/songs", songCtrl.index);

router.get("/songs/:id", songCtrl.getOneSong);

router.post("/songs", songCtrl.insertSong);

router.put("/songs/:id", songCtrl.updateSong);

router.delete("/songs/:id", songCtrl.deleteSong);

export { router };
