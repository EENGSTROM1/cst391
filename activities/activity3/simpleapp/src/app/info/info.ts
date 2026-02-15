import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './info.html',
  styleUrls: ['./info.css']
})
export class InfoComponent implements OnInit {

  @Input() name: string = '';

  quantity = 0;
  products: string[] = [];
  selectedProduct = '';

  constructor() {}

  ngOnInit(): void {
    this.quantity = 0;
    this.products = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi"];
    this.selectedProduct = "Star Wars";
  }

  newInfo() {
    this.quantity = 0;
    this.products = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi"];
    this.selectedProduct = "Star Wars";
    console.log("In newInfo() and resetting Info");
  }

  onSubmit() {
    console.log("In onSubmit() with quantity of " + this.quantity +
      " and Movie selected is " + this.selectedProduct);
  }
}
