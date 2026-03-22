import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.cdr.detectChanges();
    });
  }

  goToEdit(id?: number): void {
    if (!id) return;
    this.router.navigate(['/edit', id]);
  }

  goToView(id?: number): void {
    if (!id) return;
    this.router.navigate(['/view', id]);
  }

  deleteProduct(id?: number): void {
    if (!id) return;

    const confirmDelete = confirm('Delete this product?');
    if (!confirmDelete) return;

    this.productService.deleteProduct(id).subscribe(() => {

      // Remove item locally for instant UI update
      this.products = this.products.filter(p => p.id !== id);

      // Force view refresh
      this.cdr.detectChanges();
    });
  }
}
