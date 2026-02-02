import { Request, RequestHandler, Response } from "express";
import { OkPacket } from "mysql";
import { Album } from "./albums.model";
import { Track } from "../tracks/tracks.model";
import * as AlbumDao from "./albums.dao";
import * as TracksDao from "../tracks/tracks.dao";

export const readAlbums: RequestHandler = async (req: Request, res: Response) => {
  try {
    let albums: Album[];
    const albumId = parseInt(req.query.albumId as string);

    if (Number.isNaN(albumId)) {
      albums = await AlbumDao.readAlbums();
    } else {
      albums = await AlbumDao.readAlbumsByAlbumId(albumId);
    }

    await readTracks(albums, res);
    res.status(200).json(albums);
  } catch (error) {
    console.error("[albums.controller][readAlbums][Error] ", error);
    res.status(500).json({ message: "There was an error when fetching albums" });
  }
};

export const readAlbumsByArtist: RequestHandler = async (req: Request, res: Response) => {
  try {
    const albums = await AlbumDao.readAlbumsByArtist(req.params.artist);
    await readTracks(albums, res);
    res.status(200).json(albums);
  } catch (error) {
    console.error("[albums.controller][readAlbumsByArtist][Error] ", error);
    res.status(500).json({ message: "There was an error when fetching albums" });
  }
};

export const readAlbumsByArtistSearch: RequestHandler = async (req: Request, res: Response) => {
  try {
    const search = `%${req.params.search}%`;
    const albums = await AlbumDao.readAlbumsByArtistSearch(search);
    await readTracks(albums, res);
    res.status(200).json(albums);
  } catch (error) {
    console.error("[albums.controller][readAlbumsByArtistSearch][Error] ", error);
    res.status(500).json({ message: "There was an error when fetching albums" });
  }
};

export const readAlbumsByDescriptionSearch: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const search = `%${req.params.search}%`;
    const albums = await AlbumDao.readAlbumsByDescriptionSearch(search);
    await readTracks(albums, res);
    res.status(200).json(albums);
  } catch (error) {
    console.error("[albums.controller][readAlbumsByDescriptionSearch][Error] ", error);
    res.status(500).json({ message: "There was an error when fetching albums" });
  }
};

export const createAlbum: RequestHandler = async (req: Request, res: Response) => {
  try {
    const okPacket: OkPacket = await AlbumDao.createAlbum(req.body);

    if (req.body.tracks && Array.isArray(req.body.tracks)) {
      req.body.tracks.forEach(async (track: Track, index: number) => {
        try {
          await TracksDao.createTrack(track, index, okPacket.insertId);
        } catch (error) {
          console.error("[albums.controller][createAlbumTracks][Error] ", error);
          res.status(500).json({ message: "There was an error when writing album tracks" });
        }
      });
    }

    res.status(200).json(okPacket);
  } catch (error) {
    console.error("[albums.controller][createAlbum][Error] ", error);
    res.status(500).json({ message: "There was an error when writing albums" });
  }
};

export const updateAlbum: RequestHandler = async (req: Request, res: Response) => {
  try {
    const okPacket: OkPacket = await AlbumDao.updateAlbum(req.body);

    if (req.body.tracks && Array.isArray(req.body.tracks)) {
      req.body.tracks.forEach(async (track: Track) => {
        try {
          await TracksDao.updateTrack(track);
        } catch (error) {
          console.error("[albums.controller][updateAlbumTracks][Error] ", error);
          res.status(500).json({ message: "There was an error when updating album tracks" });
        }
      });
    }

    res.status(200).json(okPacket);
  } catch (error) {
    console.error("[albums.controller][updateAlbum][Error] ", error);
    res.status(500).json({ message: "There was an error when updating albums" });
  }
};

const readTracks = async (albums: Album[], res: Response) => {
  try {
    for (let i = 0; i < albums.length; i++) {
      const tracks = await TracksDao.readTracksByAlbumId(albums[i].albumId);
      albums[i].tracks = tracks;
    }
  } catch (error) {
    console.error("[albums.controller][readTracks][Error] ", error);
    res.status(500).json({ message: "There was an error when fetching album tracks" });
  }
};

export const deleteAlbum: RequestHandler = async (req: Request, res: Response) => {
  try {
    const albumId = parseInt(req.params.albumId as string);

    if (Number.isNaN(albumId)) {
      throw new Error("Integer expected for albumId");
    }

    const response = await AlbumDao.deleteAlbum(albumId);
    res.status(200).json(response);
  } catch (error) {
    console.error("[albums.controller][deleteAlbum][Error] ", error);
    res.status(500).json({ message: "There was an error when deleting albums" });
  }
};
