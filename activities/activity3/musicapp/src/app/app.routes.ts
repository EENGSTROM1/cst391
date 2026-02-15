import { Routes } from '@angular/router';

import { CreateAlbum } from './create-album/create-album';
import { ListArtists } from './list-artists/list-artists';
import { EditAlbum } from './edit-album/edit-album';
import { DeleteAlbum } from './delete-album/delete-album';

export const routes: Routes = [
  { path: '', redirectTo: 'list-artists', pathMatch: 'full' },

  { path: 'create', component: CreateAlbum },
  { path: 'list-artists', component: ListArtists },

  { path: 'edit/:artist/:id', component: EditAlbum },
  { path: 'delete/:artist/:id', component: DeleteAlbum },

  { path: '**', redirectTo: 'list-artists' }
];
