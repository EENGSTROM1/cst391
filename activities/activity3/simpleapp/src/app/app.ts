import { Component } from '@angular/core';
import { Shop } from './shop/shop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Shop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
