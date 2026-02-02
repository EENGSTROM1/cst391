import { execute } from "../services/mysql.connector";
import { Track } from "./tracks.model";
import { trackQueries } from "./tracks.queries";

export const readTracksByAlbumId = async (albumId: number) => {
  return execute<Track[]>(trackQueries.readTracksByAlbumId, [albumId]);
};

export const createTrack = async (track: Track, index: number, albumId: number) => {
  return execute<Track[]>(trackQueries.createTrack, [
    albumId,
    track.title,
    index,
    track.video,
    track.lyrics
  ]);
};

export const updateTrack = async (track: Track) => {
  return execute<Track[]>(trackQueries.updateTrack, [
    track.title,
    track.number,
    track.video,
    track.lyrics,
    track.trackId
  ]);
};
