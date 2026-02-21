import { Routes } from '@angular/router';

import { CreateAlbum } from './create-album/create-album';
import { ListArtists } from './list-artists/list-artists';
import { ListAlbums } from './list-albums/list-albums';
import { EditAlbum } from './edit-album/edit-album';
import { DeleteAlbum } from './delete-album/delete-album';
import { DisplayAlbum } from './display-album/display-album';

export const routes: Routes = [
  { path: '', redirectTo: 'list-artists', pathMatch: 'full' },

  { path: 'list-artists', component: ListArtists },
  { path: 'albums/:artist', component: ListAlbums },

  { path: 'album/:artist/:id', component: DisplayAlbum },

  { path: 'create', component: CreateAlbum },
  { path: 'edit/:artist/:id', component: EditAlbum },
  { path: 'delete/:artist/:id', component: DeleteAlbum },

  { path: '**', redirectTo: 'list-artists' }
];
