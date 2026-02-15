import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MusicService } from '../service/music-service';

@Component({
  selector: 'app-delete-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-album.html',
  styleUrl: './delete-album.css'
})
export class DeleteAlbum implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MusicService
  ) {}

  ngOnInit(): void {

    const artistParam = this.route.snapshot.paramMap.get('artist');
    const idParam = this.route.snapshot.paramMap.get('id');

    if (artistParam && idParam) {

      const artistId = Number(artistParam);
      const id = Number(idParam);

      // Actually delete the album
      this.service.deleteAlbum(id, artistId);

      // Navigate back to artist list
      this.router.navigate(['/list-artists'], {
        queryParams: { data: new Date() }
      });
    }
  }
}
