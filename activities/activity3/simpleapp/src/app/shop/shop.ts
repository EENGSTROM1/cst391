import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InfoComponent } from '../info/info';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InfoComponent
  ],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop {

  question: string = "What’s your name?";
  answer: string = "unknown";

  appForm = new FormGroup({
    answer: new FormControl('')
  });

  onSubmit(data: Partial<{ answer: string | null }>) {
    this.answer = data.answer ?? '';
    console.log("Your name is " + this.answer);
  }
}
