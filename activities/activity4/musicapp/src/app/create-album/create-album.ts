import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MusicService } from '../service/music-service';
import { Album } from '../../models/albums.model';

@Component({
  selector: 'app-create-album',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-album.html',
  styleUrl: './create-album.css'
})
export class CreateAlbum {

  newAlbum: Album = {
    albumId: 0,
    title: '',
    artist: '',
    year: 0,
    image: '',
    description: '',
    tracks: []
  };

  constructor(
    private service: MusicService,
    private router: Router
  ) {}

  onSubmit(): void {

    this.service.createAlbum(this.newAlbum)
      .subscribe((result: number) => {

        if (result !== -1) {
          alert('Album Created Successfully');
          this.router.navigate(['/list-artists']);
        } else {
          alert('Error Creating Album');
        }

      });
  }
}
