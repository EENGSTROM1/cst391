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
    id: 0,
    artistId: 0,
    title: '',
    year: 0
  };

  constructor(
    private service: MusicService,
    private router: Router
  ) {}

  onSubmit(): void {

    const newId = Math.max(...this.service.albums.map(a => a.id)) + 1;
    this.newAlbum.id = newId;

    const result = this.service.createAlbum(this.newAlbum);

    if (result !== -1) {
      alert('Album Created Successfully');
      this.router.navigate(['list-artists'], { queryParams: { data: new Date() } });
    } else {
      alert('Error Creating Album');
    }
  }
}
