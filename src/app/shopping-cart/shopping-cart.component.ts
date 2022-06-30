import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  items = this.shoppingCartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private shoppingCartService: ShoppingCartService,
              private formBuilder: FormBuilder) {}

  onSubmit() {
    if (this.checkoutForm.value.name && this.checkoutForm.value.address) {
      console.warn("Your order has been submitted", this.checkoutForm.value);
      this.checkoutForm.reset();
      this.items = this.shoppingCartService.clearCart();
    } else {
      window.alert("Please enter a name and address to place the order.")
    }
  }
}
