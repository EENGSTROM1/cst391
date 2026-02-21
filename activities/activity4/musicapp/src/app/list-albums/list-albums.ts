import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MusicService } from '../service/music-service';
import { Album } from '../../models/albums.model';

@Component({
  selector: 'app-list-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-albums.html',
  styleUrl: './list-albums.css'
})
export class ListAlbums implements OnInit {

  albums: Album[] = [];
  artistName: string = '';

  constructor(
    private route: ActivatedRoute,
    private service: MusicService
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      this.artistName = params.get('artist') || '';

      if (this.artistName) {
        this.service.getAlbumsOfArtist(this.artistName)
          .subscribe((albums: Album[]) => {
            this.albums = albums;
          });
      }

    });

  }
}
