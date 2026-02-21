import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Artist } from '../../models/artists.model';
import { Album } from '../../models/albums.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private host: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  public getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.host}/artists`);
  }

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.host}/albums`);
  }

  public getAlbumsOfArtist(artist: string): Observable<Album[]> {
    const encodedArtist = encodeURIComponent(artist);
    return this.http.get<Album[]>(`${this.host}/albums/artist/${encodedArtist}`);
  }

 public getAlbum(artist: string, id: number): Observable<Album> {
  const encodedArtist = encodeURIComponent(artist);
  return this.http.get<Album>(
    `${this.host}/albums/artist/${encodedArtist}/${id}`
  );
}

  public createAlbum(album: Album): Observable<number> {
    return this.http.post<number>(`${this.host}/albums`, album);
  }

  public updateAlbum(album: Album): Observable<number> {
    return this.http.put<number>(`${this.host}/albums/${album.albumId}`, album);
  }

  public deleteAlbum(id: number, artist: string): Observable<number> {
    const encodedArtist = encodeURIComponent(artist);
    return this.http.delete<number>(`${this.host}/albums/${encodedArtist}/${id}`);
  }
}
