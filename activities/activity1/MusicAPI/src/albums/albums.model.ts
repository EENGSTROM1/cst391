import { Track } from "../tracks/tracks.model";

export interface Album {
  albumId: number;
  artist: string;
  title: string;
  description: string;
  year: number;
  image: string;
  tracks?: Track[];
}
