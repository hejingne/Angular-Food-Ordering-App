import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCostsList: Observable<{type: string, price: number}[]> | undefined;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shippingCostsList = this.shoppingCartService.getShippingPrices();
  }

}
