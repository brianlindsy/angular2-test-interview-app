import { Component } from '@angular/core';
 
@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
  <nav>
    <a routerLink="/certifiedProducts" routerLinkActive="active">Certified Products</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Certified Products Sample App';
}