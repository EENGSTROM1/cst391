import { Routes } from '@angular/router';

import { ProductList } from './components/product-list/product-list';
import { ProductCreate } from './components/product-create/product-create';
import { ProductEdit } from './components/product-edit/product-edit';
import { ProductDetail } from './components/product-detail/product-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductList },
  { path: 'create', component: ProductCreate },
  { path: 'edit/:id', component: ProductEdit },
  { path: 'view/:id', component: ProductDetail }
];
