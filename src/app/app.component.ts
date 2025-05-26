import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exr1Component } from "./component/exr1/exr1.component";

@Component({
  selector: 'app-root',
  imports: [ Exr1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-cours';
}
