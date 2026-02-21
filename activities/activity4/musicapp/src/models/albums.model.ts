import { Track } from './tracks.model';

export interface Album {
  albumId: number;
  title: string;
  artist: string;
  year: number;
  image: string;
  description: string;
  tracks: Track[];
}
