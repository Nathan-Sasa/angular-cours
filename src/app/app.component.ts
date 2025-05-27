import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Exr1Component } from "./component/exr1/exr1.component";
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [ Exr1Component, HttpClientModule, RouterOutlet, RouterModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gestionnaire de produits';
}