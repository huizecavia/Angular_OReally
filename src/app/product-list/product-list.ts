import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  product = ' none'
  myText = 'This is my product list component'

  currentStyles = { 
  color: 'greenyellow', 
  width: '100px' 
  }; 

  onAdded(product: Product) {
  alert(`${product.title} ist added to the cart!`);
  }

  selectedProduct: Product | undefined;
  products: Product[] = [
        { id: 1, title: 'Keyboard' },
    { id: 2, title: 'Microphone' },
    { id: 3, title: 'Web camera' },
    { id: 4, title: 'Tablet' }
  ];
} 
