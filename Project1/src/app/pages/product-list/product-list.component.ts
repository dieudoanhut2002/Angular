import { Component, signal } from '@angular/core';
import { sign } from 'crypto';
import { Product } from '../../models/products.model';
import { title } from 'process';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  template: `<div class="grid p-8 grid-cols-2 gap-4">
    @for(product of products(); track product.id){
      <app-product-card [product]="product"/>
    }
  </div>`,
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: `Iphone 15`,
      price: 1500,
      image: `https://picsum.photos/id/237/200/300`,
      stock: 10
    },
    {
      id: 2,
      title: `Iphone 16`,
      price: 2000,
      image: `https://picsum.photos/seed/picsum/200/300`,
      stock: 11
    },
    {
      id: 3,
      title: `Samsung S17`,
      price: 1500,
      image: `https://picsum.photos/200/300?grayscale`,
      stock: 9
    },
    {
      id: 4,
      title: `Xiaomi 1X`,
      price: 1100,
      image: `https://picsum.photos/200/300/?blur`,
      stock: 0
    },
  ]);
}
