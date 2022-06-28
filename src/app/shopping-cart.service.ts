import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from './menuItems';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  orderedItems: MenuItem[] = [];

  constructor(private http: HttpClient) {}

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

  getShippingPrices() {
    return this.http.get<{
      type: string,
      price: number
    }[]>('./assets/shipping.json');
  }

}
