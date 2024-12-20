import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductListComponent],
  template: `<my-new-selector/>
  <app-product-list/> `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Project1';
}
