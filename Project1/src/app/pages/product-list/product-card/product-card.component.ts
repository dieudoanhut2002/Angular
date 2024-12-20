import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from "../../../Components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
  <div class="bg-white shadow-md border rounded-xl flex flex-col p-8 gap-6 relative">
<!-- <p>{{product().image}}</p> -->
 <div class="mx-auto">
 <img [src]="product().image" class="w-[200px] h-[100px] object-contain"/>
 </div>
<div class="flex flex-col">
  <span class="text-md font-bold">{{product().title}}</span>
  <span class="text-sm font-bold">{{'$' +product().price}}</span>
  <app-primary-button class="mt-3" label="Thêm vào giỏ hàng" (btnClicked)="cartService.addToCart(product())"/>
</div>
<span class="absolute top-2 right-3 text-sm font-bold" 
[class]="product().stock ? 'text-green-700' : 'text-red-500'"
>
  @if(product().stock)
    {
      {{product().stock}} left
    }
    @else {
      Out of stock
    }
</span>  
  </div>
  `,
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = input.required<Product>();
  cartService = inject(CartService);
}

