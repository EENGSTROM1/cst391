import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = 'My Music Collection';
  version = '1.0';

  displayVersion(): void {
    alert('Version: ' + this.version);
  }

}
