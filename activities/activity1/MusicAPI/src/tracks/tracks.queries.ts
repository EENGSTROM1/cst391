export const trackQueries = {
  createTrack: `
    INSERT INTO music.tracks (album_id, title, number, video_url, lyrics)
    VALUES(?,?,?,?,?)
  `,
  readTracksByAlbumId: `
    SELECT
      id as trackId,
      title as title,
      number as number,
      video_url as video,
      lyrics as lyrics
    FROM music.tracks
    WHERE album_id = ?
  `,
  updateTrack: `
    UPDATE music.tracks
    SET title = ?, number = ?, video_url = ?, lyrics = ?
    WHERE id = ?
  `
};
