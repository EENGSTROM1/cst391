import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MusicService } from '../service/music-service';
import { Album } from '../../models/albums.model';

@Component({
  selector: 'app-delete-album',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './delete-album.html',
  styleUrl: './delete-album.css'
})
export class DeleteAlbum implements OnInit {

  album: Album | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MusicService
  ) {}

  ngOnInit(): void {

    const artistParam = this.route.snapshot.paramMap.get('artist');
    const idParam = this.route.snapshot.paramMap.get('id');

    if (artistParam && idParam) {
      const albumId = Number(idParam);

      // Load album first (do NOT delete yet)
      this.service.getAlbum(artistParam, albumId)
        .subscribe((album: Album) => {
          this.album = album;
        });
    }
  }

  confirmDelete(): void {
    if (this.album) {
      this.service.deleteAlbum(this.album.albumId, this.album.artist)
        .subscribe(() => {
          this.router.navigate(['/list-artists']);
        });
    }
  }

  cancel(): void {
    this.router.navigate(['/list-artists']);
  }
}
