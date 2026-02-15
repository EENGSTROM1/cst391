import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MusicService } from '../service/music-service';
import { Artist } from '../../models/artists.model';
import { Album } from '../../models/albums.model';
import { DisplayAlbum } from '../display-album/display-album';

@Component({
  selector: 'app-list-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, DisplayAlbum],
  templateUrl: './list-albums.html',
  styleUrl: './list-albums.css'
})
export class ListAlbums implements OnInit {

  @Input() artist!: Artist;

  albums: Album[] = [];
  selectedAlbum: Album | null = null;

  constructor(private service: MusicService) {}

  ngOnInit(): void {
    if (this.artist) {
      this.albums = this.service.getAlbums(this.artist.id);
    }
  }

  public onSelectAlbum(album: Album): void {
    this.selectedAlbum = album;
  }
}
