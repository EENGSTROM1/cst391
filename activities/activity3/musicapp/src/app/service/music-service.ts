import { Injectable } from '@angular/core';

import * as exampledata from '../../data/sample-music-data.json';

import { Artist } from '../../models/artists.model';
import { Album } from '../../models/albums.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  artists: Artist[] = (exampledata as any).artists;
  albums: Album[] = (exampledata as any).albums;

  constructor() { }

  // Return all artists
  public getArtists(): Artist[] {
    return this.artists;
  }

  // Return albums for a specific artistId
  public getAlbums(artistId: number): Album[] {
    return this.albums.filter(a => a.artistId === artistId);
  }

  // Return a single album
  public getAlbum(artistId: number, id: number): Album | null {
    const found = this.albums.find(
      a => a.artistId === artistId && a.id === id
    );

    return found ? found : null;
  }

  // Create album
  public createAlbum(album: Album): number {
    try {
      this.albums.push(album);
      return album.id;
    } catch {
      return -1;
    }
  }

  // Update album
  public updateAlbum(album: Album): number {
    const index = this.albums.findIndex(a => a.id === album.id);

    if (index !== -1) {
      this.albums.splice(index, 1, album);
      return 0;
    }

    return -1;
  }

  // Delete album
  public deleteAlbum(id: number, artistId: number): number {
    const index = this.albums.findIndex(
      a => a.id === id && a.artistId === artistId
    );

    if (index !== -1) {
      this.albums.splice(index, 1);
      return 0;
    }

    return -1;
  }
}
