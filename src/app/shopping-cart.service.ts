import { Injectable } from '@angular/core';
import { MenuItem } from './menuItems';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  orderedItems: MenuItem[] = [];

  constructor() {}

  getItems() {
    return this.orderedItems
  }

  addToCart(item: MenuItem) {
    this.orderedItems.push(item)
  }

  clearCart() {
    this.orderedItems = [];
    return this.orderedItems;
  }

}
