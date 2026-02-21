export const artistQueries = {
  readArtists: `
    SELECT 
      MIN(id) AS id,
      artist AS artist
    FROM music.albums
    GROUP BY artist
  `
};
