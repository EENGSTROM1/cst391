import { Router } from "express";
import * as AlbumsController from "./albums.controller";

const router = Router();

// GET all albums OR albums by query string
router.get("/albums", AlbumsController.readAlbums);

// GET albums by artist (path param)
router.get("/albums/artist/:artist", AlbumsController.readAlbumsByArtist);

// GET albums by artist search
router.get("/albums/search/artist/:search", AlbumsController.readAlbumsByArtistSearch);

// GET albums by description search
router.get("/albums/search/description/:search", AlbumsController.readAlbumsByDescriptionSearch);

// POST create album
router.post("/albums", AlbumsController.createAlbum);

// PUT update album
router.put("/albums", AlbumsController.updateAlbum);

// DELETE album by id
router.delete("/albums/:albumId", AlbumsController.deleteAlbum);

export default router;
