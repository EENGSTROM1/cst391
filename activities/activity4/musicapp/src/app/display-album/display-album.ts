import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MusicService } from '../service/music-service';
import { Album } from '../../models/albums.model';

@Component({
  selector: 'app-display-album',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './display-album.html',
  styleUrl: './display-album.css'
})
export class DisplayAlbum implements OnInit {

  album: Album | null = null;

  constructor(
    private route: ActivatedRoute,
    private service: MusicService
  ) {}

  ngOnInit(): void {

    const artistParam = this.route.snapshot.paramMap.get('artist');
    const idParam = this.route.snapshot.paramMap.get('id');

    console.log('Artist:', artistParam);
    console.log('ID:', idParam);

    if (artistParam && idParam) {

      const albumId = Number(idParam);

      this.service.getAlbum(artistParam, albumId)
        .subscribe((album: Album) => {
          console.log('Album returned:', album);
          this.album = album;
        });

    }
  }
}
