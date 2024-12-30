import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../Components/primary-button/primary-button.component';
import { spawn } from 'child_process';
import { CartService } from '../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'my-new-selector',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
  <div class="bg-slate-300 items-center px-3 py-3 shadow-md flex justify-between">
    <span class="text-xl">Trang Chủ</span>
    <app-primary-button routerLink="/cart" [label]="'Giỏ hàng(' + cartService.cart().length + ')'" (btnClicked)="showButtonClicked()" (btnOnHover)="showMouseHover()"/>
    </div>`,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showButtonClicked(){
    console.log('Button clicked');
  }
  showMouseHover(){
    console.log('Mouse on hover');
  }
  cartService = inject(CartService);
}
