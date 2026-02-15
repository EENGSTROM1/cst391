import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicService } from '../service/music-service';
import { Album } from '../../models/albums.model';

@Component({
  selector: 'app-edit-album',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-album.html',
  styleUrl: './edit-album.css'
})
export class EditAlbum implements OnInit {

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
    const artistId = Number(artistParam);
    const id = Number(idParam);

    this.album = this.service.getAlbum(artistId, id);
  }
}

  save(): void {
    if (this.album) {
      this.service.updateAlbum(this.album);
      this.router.navigate(['/list-artists']);
    }
  }
}
