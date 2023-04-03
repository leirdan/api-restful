import { Router } from "express";
import { AlbumController } from "./controller/AlbumController";

const router = Router();
const albumCtrl = new AlbumController();

router.get("/albums", albumCtrl.index);

router.get("/albums/:id", albumCtrl.getOneAlbum);

router.post("/albums", albumCtrl.insertAlbum);

router.put("/albums", albumCtrl.updateAlbum);

router.delete("/albums/:id", albumCtrl.deleteAlbum);

export { router };
